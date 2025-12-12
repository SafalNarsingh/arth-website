import { NextRequest, NextResponse } from 'next/server';
import { generateTeamCode, createTeam, createPlayer, checkEmailExists } from "@/helper/db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    console.log('📥 Received:', body);

    // Validate
    if (!body.teamName || !body.leader || !body.members || body.members.length !== 2) {
      return NextResponse.json(
        { success: false, message: 'Invalid data' },
        { status: 400 }
      );
    }

    // Check duplicate emails
    const allEmails = [
      body.leader.email,
      body.members[0].email,
      body.members[1].email
    ];

    const existingEmails = await checkEmailExists(allEmails);
    if (existingEmails) {
      return NextResponse.json(
        { success: false, message: `Email(s) already registered: ${existingEmails.join(', ')}` },
        { status: 409 }
      );
    }

    // Generate team code
    const teamCode = await generateTeamCode();
    console.log('🔑 Team code:', teamCode);

    // Create team
    const team = await createTeam(body.teamName, teamCode);
    console.log('✅ Team created:', team);

    // Create leader
    await createPlayer(
      team.id,
      body.leader.name,
      body.leader.email,
      body.leader.phone,
      body.leader.college,
      true
    );

    // Create members
    await createPlayer(
      team.id,
      body.members[0].name,
      body.members[0].email,
      body.members[0].phone,
      body.members[0].college,
      false
    );

    await createPlayer(
      team.id,
      body.members[1].name,
      body.members[1].email,
      body.members[1].phone,
      body.members[1].college,
      false
    );

    console.log('✅ Registration complete');

    return NextResponse.json(
      {
        success: true,
        message: 'Team registered successfully!',
        data: { teamCode, teamName: team.team_name }
      },
      { status: 201 }
    );

  } catch (error: any) {
    console.error('❌ Error:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Registration failed' },
      { status: 500 }
    );
  }
}