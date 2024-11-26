import TeamMember from "@/components/team-member";

const Team = () => {
  return (
    <div className="space-y-4 px-4 md:px-0 h-full py-8">
      <TeamMember />
      <TeamMember />
      <TeamMember />
    </div>
  );
};

export default Team;
