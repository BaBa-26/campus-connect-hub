import { useState } from "react";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Search } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Services = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("all");

  const tutorings = [
    {
      title: "Math Tutoring - Calculus I & II",
      subject: "Mathematics",
      provider: "Emily Chen",
      rate: 25,
      availability: "Mon-Wed 4-7 PM",
      description: "Experienced tutor with A+ grades in Calculus. Patient and clear explanations.",
    },
    {
      title: "Chemistry Lab Help",
      subject: "Chemistry",
      provider: "Marcus Williams",
      rate: 30,
      availability: "Tue-Thu 2-5 PM",
      description: "Lab TA offering help with organic chemistry concepts and lab reports.",
    },
    {
      title: "Python Programming",
      subject: "Computer Science",
      provider: "Lisa Park",
      rate: 35,
      availability: "Weekends 10 AM-6 PM",
      description: "CS major specializing in Python, data structures, and algorithms.",
    },
  ];

  const studyGroups = [
    {
      title: "Biology 101 Study Group",
      subject: "Biology",
      provider: "Study Group",
      rate: 0,
      availability: "Thursdays 6 PM",
      description: "Weekly study sessions for Bio 101. All welcome! Meet at library room 305.",
    },
    {
      title: "Economics Exam Prep",
      subject: "Economics",
      provider: "Study Group",
      rate: 0,
      availability: "Mon & Wed 5 PM",
      description: "Preparing for midterm together. Working through practice problems and concepts.",
    },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Services</h1>
            <p className="text-muted-foreground">
              Find tutoring and study groups, or offer your expertise
            </p>
          </div>
          <Button className="bg-gradient-purple-blue">
            <Plus className="mr-2 h-4 w-4" /> Offer Service
          </Button>
        </div>

        <Tabs defaultValue="tutoring" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="tutoring">Tutoring</TabsTrigger>
            <TabsTrigger value="study-groups">Study Groups</TabsTrigger>
          </TabsList>

          <TabsContent value="tutoring" className="space-y-6">
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search tutors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Subjects</SelectItem>
                  <SelectItem value="math">Mathematics</SelectItem>
                  <SelectItem value="science">Science</SelectItem>
                  <SelectItem value="cs">Computer Science</SelectItem>
                  <SelectItem value="language">Languages</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Tutoring Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tutorings.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="study-groups" className="space-y-6">
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search study groups..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Subjects</SelectItem>
                  <SelectItem value="math">Mathematics</SelectItem>
                  <SelectItem value="science">Science</SelectItem>
                  <SelectItem value="cs">Computer Science</SelectItem>
                  <SelectItem value="language">Languages</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Study Groups Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {studyGroups.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Services;
