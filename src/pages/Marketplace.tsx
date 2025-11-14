import { useState } from "react";
import MarketplaceCard from "@/components/MarketplaceCard";
import CreateListingDialog from "@/components/CreateListingDialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

interface Listing {
  id: string;
  title: string;
  price: number;
  category: string;
  condition: string;
  seller: string;
  image: string;
  description?: string;
}

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [listings, setListings] = useState<Listing[]>([
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
    {
      id: "4",
      title: "iPhone 13",
      price: 650,
      category: "Electronics",
      condition: "Good",
      seller: "Alex K.",
      image: "/placeholder.svg",
    },
    {
      id: "5",
      title: "Biology Lab Manual",
      price: 30,
      category: "Books",
      condition: "Like New",
      seller: "Emma L.",
      image: "/placeholder.svg",
    },
    {
      id: "6",
      title: "Desk Chair",
      price: 50,
      category: "Furniture",
      condition: "Good",
      seller: "David P.",
      image: "/placeholder.svg",
    },
  ]);

  const handleCreateListing = (newListing: Omit<Listing, "id">) => {
    const listingWithId = {
      ...newListing,
      id: Date.now().toString(),
    };
    setListings([listingWithId, ...listings]);
  };

  const handleDeleteListing = (id: string) => {
    setListings(listings.filter((listing) => listing.id !== id));
  };

  const filteredListings = listings.filter((listing) => {
    const matchesSearch = listing.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || listing.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-8">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Marketplace</h1>
            <p className="text-muted-foreground">
              Browse items for sale from fellow students
            </p>
          </div>
          <CreateListingDialog onCreateListing={handleCreateListing} />
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search listings..."
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
              <SelectItem value="electronics">Electronics</SelectItem>
              <SelectItem value="books">Books</SelectItem>
              <SelectItem value="furniture">Furniture</SelectItem>
              <SelectItem value="clothing">Clothing</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredListings.length > 0 ? (
            filteredListings.map((listing) => (
              <MarketplaceCard key={listing.id} {...listing} onDelete={handleDeleteListing} />
            ))
          ) : (
            <p className="col-span-full text-center text-muted-foreground py-12">
              No listings found. Try adjusting your search or filters.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
