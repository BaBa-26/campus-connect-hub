import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface MarketplaceCardProps {
  title: string;
  price: number;
  category: string;
  condition: string;
  seller: string;
  image: string;
}

const MarketplaceCard = ({
  title,
  price,
  category,
  condition,
  seller,
  image,
}: MarketplaceCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>
          <Badge variant="secondary">{category}</Badge>
        </div>
        <p className="text-2xl font-bold text-primary mb-2">${price}</p>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>Condition: {condition}</span>
          <span>By {seller}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-gradient-purple-blue">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MarketplaceCard;
