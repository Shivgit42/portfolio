"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCardList from "@/app/projects/components/ProjectCardList";
import ClientProjects from "./ClientProjects";
import ChromeExtensions from "./Extensions";
import LearningProjects from "./LearningProjects";

const CategorizedProjectList = () => {
  return (
    <div className="w-full">
      <Tabs defaultValue="full stack apps" className="w-full">
        <div className="flex justify-center mb-8 max-sm:mb-4 max-sm:px-2">
          <TabsList className="w-full max-w-3xl sm:max-w-4xl bg-white bg-opacity-10 backdrop-blur-lg border dark:border-white/10 grid grid-cols-1 sm:grid-cols-4 gap-1">
            <TabsTrigger
              value="full stack apps"
              className="text-xs sm:text-sm data-[state=active]:bg-white/20"
            >
              Full Stack
            </TabsTrigger>
            <TabsTrigger
              value="client projects"
              className="text-xs sm:text-sm data-[state=active]:bg-white/20"
            >
              Client Projects
            </TabsTrigger>
            <TabsTrigger
              value="extensions"
              className="text-xs sm:text-sm data-[state=active]:bg-white/20"
            >
              Chrome Extensions
            </TabsTrigger>
            <TabsTrigger
              value="learning projects"
              className="text-xs sm:text-sm data-[state=active]:bg-white/20"
            >
              Learning Platform
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="full stack apps" className="mt-0">
          <ProjectCardList />
        </TabsContent>

        <TabsContent value="client projects" className="mt-0">
          <ClientProjects />
        </TabsContent>

        <TabsContent value="extensions" className="mt-0">
          <ChromeExtensions />
        </TabsContent>

        <TabsContent value="learning projects" className="mt-0">
          <LearningProjects />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CategorizedProjectList;
