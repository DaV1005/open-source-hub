import { useState, useEffect,  } from "react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import {  Star, Bug, ArrowRight } from "lucide-react";


// Define the structure of the project data
interface Project {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  open_issues_count: number;
  language: string;
}

// API fetch function
async function fetchProjects(): Promise<Project[]> {
  const res = await fetch('https://open-source-hub.onrender.com/api/projects');
  const data = await res.json();
  return data;
}

export default function Homepage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [selectedTab, setSelectedTab] = useState<string>("all");

  useEffect(() => {
    fetchProjects().then((data) => {
      setProjects(data);
      setFilteredProjects(data);
    });
  }, []);

  useEffect(() => {
    if (selectedTab === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.language && project.language.toLowerCase() === selectedTab)
      );
    }
  }, [selectedTab, projects]);

  const handleTabChange = (value: string) => {
    setSelectedTab(value);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Open Source Hub</h1>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-6">Discover Open Source Projects</h2>
            <div className="max-w-2xl mx-auto relative"></div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all" className="mb-8" onValueChange={handleTabChange}>
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                <TabsTrigger value="typescript">TypeScript</TabsTrigger>
                <TabsTrigger value="python">Python</TabsTrigger>
                <TabsTrigger value="java">Java</TabsTrigger>
                <TabsTrigger value="c++">C++</TabsTrigger>
                <TabsTrigger value="c">C</TabsTrigger>
                <TabsTrigger value="go">Go</TabsTrigger>
                <TabsTrigger value="dart">Dart</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="flex flex-wrap -mx-4">
              {filteredProjects.map((project, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle>{project.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex space-x-2 mb-4">
                        {project.language && <Badge>{project.language}</Badge>}
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Star className="w-4 h-4 mr-1" />
                          {project.stargazers_count}
                        </span>
                        <span className="flex items-center">
                          <Bug className="w-4 h-4 mr-1" />
                          {project.open_issues_count}
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <a href={project.html_url}>
                        <Button
                          variant="outline"
                          className="w-full"
                      
                          rel="noopener noreferrer"
                        >
                          Contribute
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </a>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Open Source Hub</h3>
              <p className="text-sm text-gray-600">
                Connecting developers with impactful open source projects.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
