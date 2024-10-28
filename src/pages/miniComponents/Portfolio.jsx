import { Button } from "@/components/ui/button";
import axios from "axios";
import { Loader } from "lucide-react"; // Import the Loader icon for spinner
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [viewAll, setViewAll] = useState(false);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const getMyProjects = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `${import.meta.env.VITE_SOME_KEY}/api/v1/project/getall`,
          { withCredentials: true }
        );
        setProjects(data.projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };
    getMyProjects();
  }, []);

  return (
    <div>
      <div className="relative mb-12">
        <h1
          className="hidden sm:flex gap-4 items-center text-[2rem] sm:text-[2.75rem] md:text-[3rem] 
          lg:text-[3.8rem] leading-[56px] md:leading-[67px] lg:leading-[90px] tracking-[15px] 
          mx-auto w-fit font-extrabold about-h1"
          style={{
            background: "hsl(222.2 84% 4.9%)",
          }}
        >
          MY{" "}
          <span className="text-tubeLight-effect font-extrabold">
            PORTFOLIO
          </span>
        </h1>
        <h1
          className="flex sm:hidden gap-4 items-center text-[2rem] sm:text-[2.75rem] 
          md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] lg:leading-[90px] 
          tracking-[15px] mx-auto w-fit font-extrabold about-h1"
          style={{
            background: "hsl(222.2 84% 4.9%)",
          }}
        >
          MY <span className="text-tubeLight-effect font-extrabold">WORK</span>
        </h1>
        <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Loader className="animate-spin w-10 h-10 text-tubeLight-effect" />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {viewAll
              ? projects.map((element) => (
                  <Link to={`/project/${element._id}`} key={element._id}>
                    <img
                      src={element.projectBanner && element.projectBanner.url}
                      alt={element.title}
                    />
                  </Link>
                ))
              : projects.slice(0, 9).map((element) => (
                  <Link to={`/project/${element._id}`} key={element._id}>
                    <img
                      src={element.projectBanner && element.projectBanner.url}
                      alt={element.title}
                    />
                  </Link>
                ))}
          </div>
          {projects.length > 9 && (
            <div className="w-full text-center my-9">
              <Button className="w-52" onClick={() => setViewAll(!viewAll)}>
                {viewAll ? "Show Less" : "Show More"}
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Portfolio;
