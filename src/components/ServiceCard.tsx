import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { User, DollarSign } from "lucide-react";

interface ServiceCardProps {
  title: string;
  subject: string;
  provider: string;
  rate: number;
  availability: string;
  description: string;
}

const ServiceCard = ({
  title,
  subject,
  provider,
  rate,
  availability,
  description,
}: ServiceCardProps) => {
  return (
    <Card className="hover:shadow-elegant transition-all duration-300">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl">{title}</CardTitle>
          <Badge variant="secondary">{subject}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-muted-foreground">{description}</p>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <User className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">Provider: {provider}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <DollarSign className="h-4 w-4 text-secondary" />
            <span className="font-semibold text-primary">${rate}/hour</span>
          </div>
          <div className="text-sm text-muted-foreground">
            Available: {availability}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-gradient-purple-blue">
          Contact Provider
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
