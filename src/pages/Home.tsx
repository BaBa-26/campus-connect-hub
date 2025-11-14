import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag, Users, Calendar } from "lucide-react";
import MarketplaceCard from "@/components/MarketplaceCard";
import EventCard from "@/components/EventCard";
import logo from "@/assets/campus-connect-logo.png";

const Home = () => {
  const featuredListings = [
    {
      id: "1",
      title: "MacBook Pro 2021",
      price: 1200,
      category: "Electronics",
      condition: "Like New",
      seller: "John D.",
      image: "/placeholder.svg",
    },
    {
      id: "2",
      title: "Calculus Textbook",
      price: 45,
      category: "Books",
      condition: "Good",
      seller: "Sarah M.",
      image: "/placeholder.svg",
    },
    {
      id: "3",
      title: "Mini Fridge",
      price: 80,
      category: "Furniture",
      condition: "Excellent",
      seller: "Mike R.",
      image: "/placeholder.svg",
    },
  ];

  const upcomingEvents = [
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
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-subtle py-20 md:py-32">
        <div className="container relative z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            <img src={logo} alt="Campus Connect" className="h-24 w-24 md:h-32 md:w-32 animate-in fade-in duration-700" />
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">
              Your Campus{" "}
              <span className="bg-gradient-purple-blue bg-clip-text text-transparent">
                Marketplace & Hub
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Buy, sell, and connect with fellow students. Find tutoring, join study groups,
              and discover campus events all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-purple-blue text-lg" asChild>
                <Link to="/marketplace">
                  Browse Marketplace <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg" asChild>
                <Link to="/events">View Events</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything You Need in One Place
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-muted/30 hover:shadow-card transition-all duration-300">
              <div className="h-16 w-16 rounded-full bg-gradient-purple-blue flex items-center justify-center">
                <ShoppingBag className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Student Marketplace</h3>
              <p className="text-muted-foreground">
                Buy and sell textbooks, electronics, furniture, and more with trusted classmates.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-muted/30 hover:shadow-card transition-all duration-300">
              <div className="h-16 w-16 rounded-full bg-gradient-purple-blue flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Services & Tutoring</h3>
              <p className="text-muted-foreground">
                Find tutors, join study groups, and offer your skills to fellow students.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-muted/30 hover:shadow-card transition-all duration-300">
              <div className="h-16 w-16 rounded-full bg-gradient-purple-blue flex items-center justify-center">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Campus Events</h3>
              <p className="text-muted-foreground">
                Stay updated on campus activities, workshops, and social gatherings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Listings</h2>
            <Button variant="outline" asChild>
              <Link to="/marketplace">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredListings.map((listing) => (
              <MarketplaceCard key={listing.id} {...listing} onDelete={() => {}} />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Upcoming Events</h2>
            <Button variant="outline" asChild>
              <Link to="/events">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-purple-blue">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Join your campus community today and start connecting with fellow students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/marketplace">Post a Listing</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
