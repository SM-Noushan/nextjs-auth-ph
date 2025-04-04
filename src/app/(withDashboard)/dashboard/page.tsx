import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/authOptions";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  // console.log(session);
  return (
    <div>
      <h1 className="text-4xl text-center mt-10">
        Welcome {session?.user?.name}
      </h1>
    </div>
  );
};

export default DashboardPage;
