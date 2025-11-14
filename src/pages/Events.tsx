import { useState } from "react";
import EventCard from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Search, Calendar as CalendarIcon } from "lucide-react";

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const events = [
    {
      title: "Study Group - Organic Chemistry",
      date: "March 15, 2024",
      time: "3:00 PM - 5:00 PM",
      location: "Library Room 204",
      category: "Academic",
      description: "Join us for a collaborative study session preparing for the midterm exam.",
    },
    {
      title: "Campus Job Fair",
      date: "March 20, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Student Center",
      category: "Career",
      description: "Meet potential employers and explore internship opportunities.",
    },
    {
      title: "Spring Concert",
      date: "March 22, 2024",
      time: "7:00 PM - 10:00 PM",
      location: "Main Auditorium",
      category: "Social",
      description: "Annual spring concert featuring student bands and performances.",
    },
    {
      title: "Python Workshop",
      date: "March 25, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "CS Building Lab 3",
      category: "Workshop",
      description: "Learn Python basics and build your first project. Laptops required.",
    },
    {
      title: "Intramural Basketball Finals",
      date: "March 28, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Sports Complex",
      category: "Sports",
      description: "Championship game for the spring basketball season. Free entry!",
    },
    {
      title: "Career Panel: Tech Industry",
      date: "March 30, 2024",
      time: "5:00 PM - 7:00 PM",
      location: "Business Building Room 201",
      category: "Career",
      description: "Hear from alumni working at major tech companies. Q&A session included.",
    },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Campus Events</h1>
            <p className="text-muted-foreground">
              Discover and join upcoming campus activities
            </p>
          </div>
          <Button className="bg-gradient-purple-blue">
            <Plus className="mr-2 h-4 w-4" /> Add Event
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="academic">Academic</SelectItem>
              <SelectItem value="social">Social</SelectItem>
              <SelectItem value="sports">Sports</SelectItem>
              <SelectItem value="career">Career</SelectItem>
              <SelectItem value="workshop">Workshop</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Calendar View Toggle */}
        <div className="mb-6">
          <Button variant="outline" className="gap-2">
            <CalendarIcon className="h-4 w-4" />
            Switch to Calendar View
          </Button>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
