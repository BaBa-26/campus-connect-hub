import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/campus-connect-logo.png";

const About = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Project Lead & Full Stack Developer",
      bio: "Computer Science major passionate about building tools that help students connect.",
      responsibilities: "Overall architecture, database design, backend API development",
      github: "alexjohnson",
      email: "alex@campusconnect.edu",
    },
    {
      name: "Sarah Martinez",
      role: "Frontend Developer & UX Designer",
      bio: "Design enthusiast focused on creating beautiful, intuitive user experiences.",
      responsibilities: "UI/UX design, React components, responsive layouts",
      github: "sarahmartinez",
      email: "sarah@campusconnect.edu",
    },
    {
      name: "Michael Chen",
      role: "Backend Developer",
      bio: "Building robust systems and APIs that scale with user needs.",
      responsibilities: "API endpoints, authentication system, database optimization",
      github: "michaelchen",
      email: "michael@campusconnect.edu",
    },
    {
      name: "Emily Rodriguez",
      role: "Frontend Developer",
      bio: "Creating interactive components and smooth user experiences.",
      responsibilities: "Marketplace features, event calendar, state management",
      github: "emilyrodriguez",
      email: "emily@campusconnect.edu",
    },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container">
        {/* Project Overview */}
        <section className="mb-16 text-center">
          <div className="flex justify-center mb-6">
            <img src={logo} alt="Campus Connect" className="h-20 w-20" />
          </div>
          <h1 className="text-4xl font-bold mb-4">About Campus Connect</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Campus Connect is a comprehensive student marketplace and community hub designed to
            facilitate student-to-student commerce, service exchange, and community engagement
            within individual university campuses.
          </p>
          <div className="bg-gradient-subtle rounded-lg p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-muted-foreground">
              We aim to create a trusted, campus-exclusive environment where students can safely
              buy and sell products, offer and request services like tutoring, and discover
              campus events. By centralizing these functions, we strengthen campus community
              connections and make student life more convenient.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-16 w-16 rounded-full bg-gradient-purple-blue flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                      <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                      <p className="text-muted-foreground text-sm mb-3">{member.bio}</p>
                      <div className="mb-4">
                        <p className="text-sm font-medium mb-1">Responsibilities:</p>
                        <p className="text-sm text-muted-foreground">{member.responsibilities}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="gap-2">
                          <Github className="h-4 w-4" />
                          {member.github}
                        </Button>
                        <Button variant="outline" size="sm" className="gap-2">
                          <Mail className="h-4 w-4" />
                          Email
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Task Delegation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Task Delegation</h2>
          <Card>
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold">Team Member</th>
                      <th className="text-left py-3 px-4 font-semibold">Primary Responsibility</th>
                      <th className="text-left py-3 px-4 font-semibold">Key Tasks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4">Alex Johnson</td>
                      <td className="py-3 px-4">Backend & Database</td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">
                        Database schema, API endpoints, authentication
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4">Sarah Martinez</td>
                      <td className="py-3 px-4">UI/UX Design</td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">
                        Design system, component library, user flows
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4">Michael Chen</td>
                      <td className="py-3 px-4">Backend Services</td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">
                        CRUD operations, data validation, security
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Emily Rodriguez</td>
                      <td className="py-3 px-4">Frontend Features</td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">
                        Marketplace UI, event calendar, services page
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Project Info */}
        <section className="text-center bg-gradient-subtle rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Project Phase</h2>
          <p className="text-muted-foreground mb-6">
            Currently in Part 1: Core marketplace and event management features with full CRUD
            functionality. Future phases will include real-time chat, enhanced authentication,
            and advanced community tools.
          </p>
          <Button variant="outline" className="gap-2">
            <Github className="h-4 w-4" />
            View on GitHub
          </Button>
        </section>
      </div>
    </div>
  );
};

export default About;
