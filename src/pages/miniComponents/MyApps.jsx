import { Card } from "@/components/ui/card";
import axios from "axios";
import { Loader } from "lucide-react"; // Import Loader for spinner
import { useEffect, useState } from "react";

const MyApps = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const getMyApps = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `${import.meta.env.VITE_SOME_KEY}/api/v1/softwareapplication/getall`,
          { withCredentials: true }
        );
        setApps(data.softwareApplications);
      } catch (error) {
        console.error("Error fetching apps:", error);
      } finally {
        setLoading(false); // Stop loading after fetching
      }
    };
    getMyApps();
  }, []);

  return (
    <div className="w-full flex flex-col gap-8 sm:gap-12">
      <h1 className="text-tubeLight-effect text-[2rem] sm:text-[2.75rem] md:text-[3rem] lg:text-[3.8rem] tracking-[15px] dancing_text mx-auto w-fit">
        MY APPS
      </h1>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Loader className="animate-spin w-10 h-10 text-tubeLight-effect" />
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {apps &&
            apps.map((element) => (
              <Card
                className="h-fit p-7 flex flex-col justify-center items-center gap-3"
                key={element._id}
              >
                <img
                  src={element.svg && element.svg.url}
                  alt="app logo"
                  className="h-12 sm:h-24 w-auto"
                />
                <p className="text-muted-foreground text-center">
                  {element.name}
                </p>
              </Card>
            ))}
        </div>
      )}
    </div>
  );
};

export default MyApps;
