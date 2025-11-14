import { useState } from "react";
import MarketplaceCard from "@/components/MarketplaceCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Search } from "lucide-react";

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const listings = [
    {
      title: "MacBook Pro 2021",
      price: 1200,
      category: "Electronics",
      condition: "Like New",
      seller: "John D.",
      image: "/placeholder.svg",
    },
    {
      title: "Calculus Textbook",
      price: 45,
      category: "Books",
      condition: "Good",
      seller: "Sarah M.",
      image: "/placeholder.svg",
    },
    {
      title: "Mini Fridge",
      price: 80,
      category: "Furniture",
      condition: "Excellent",
      seller: "Mike R.",
      image: "/placeholder.svg",
    },
    {
      title: "iPhone 13",
      price: 650,
      category: "Electronics",
      condition: "Good",
      seller: "Alex K.",
      image: "/placeholder.svg",
    },
    {
      title: "Biology Lab Manual",
      price: 30,
      category: "Books",
      condition: "Like New",
      seller: "Emma L.",
      image: "/placeholder.svg",
    },
    {
      title: "Desk Chair",
      price: 50,
      category: "Furniture",
      condition: "Good",
      seller: "David P.",
      image: "/placeholder.svg",
    },
  ];

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
          <Button className="bg-gradient-purple-blue">
            <Plus className="mr-2 h-4 w-4" /> Create Listing
          </Button>
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
          {listings.map((listing, index) => (
            <MarketplaceCard key={index} {...listing} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
