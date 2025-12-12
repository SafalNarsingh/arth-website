import { supabase } from "@/utils/supabase";

// Generate 5-digit unique team code
export async function generateTeamCode(): Promise<string> {
  let code = '';
  let isUnique = false;

  while (!isUnique) {
    code = Math.floor(10000 + Math.random() * 90000).toString();
    
    const { data } = await supabase
      .from('Team')
      .select('team_code')
      .eq('team_code', code)
      .single();
    
    if (!data) isUnique = true;
  }

  return code;
}

// Create team
export async function createTeam(teamName: string, teamCode: string) {
  const { data, error } = await supabase
    .from('Team')
    .insert({ team_name: teamName, team_code: teamCode })
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

// Create player
export async function createPlayer(
  teamId: number,
  name: string,
  email: string,
  phone: string,
  organization: string,
  isLead: boolean
) {
  const { data, error } = await supabase
    .from('Players')
    .insert({
      Team: teamId,
      Name: name,
      Email: email.toLowerCase(),
      Phone: phone,
      Organization: organization,
      isLead: isLead,
    })
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

// Check if email exists
export async function checkEmailExists(emails: string[]) {
  const { data } = await supabase
    .from('Players')
    .select('Email')
    .in('Email', emails.map(e => e.toLowerCase()));

  return data && data.length > 0 ? data.map(p => p.Email) : null;
}