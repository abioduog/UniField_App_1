import React, { useState, useEffect } from 'react';
   import { Search, Filter, CreditCard, MessageSquare, Bell, ChevronDown, ChevronRight, X } from 'lucide-react';
   import { 
     Card, 
     CardContent, 
     CardHeader, 
     CardTitle 
   } from "@/components/ui/card";
   import {
     Table,
     TableBody,
     TableCell,
     TableHead,
     TableHeader,
     TableRow,
   } from "@/components/ui/table";
   import {
     DropdownMenu,
     DropdownMenuContent,
     DropdownMenuItem,
     DropdownMenuTrigger,
   } from "@/components/ui/dropdown-menu";
   import {
     Dialog,
     DialogContent,
     DialogDescription,
     DialogHeader,
     DialogTitle,
     DialogTrigger,
   } from "@/components/ui/dialog";
   import { Input } from "@/components/ui/input";
   import { Button } from "@/components/ui/button";
   import { Badge } from "@/components/ui/badge";
   import { Slider } from "@/components/ui/slider";

   // Mock data for retailers
   const mockRetailers = [
     { id: 1, name: "ABC Store", location: "Lagos", salesVolume: 50000, creditStatus: "Good", creditScore: 750, creditLimit: 100000, creditUtilization: 60000 },
     { id: 2, name: "XYZ Mart", location: "Abuja", salesVolume: 75000, creditStatus: "Excellent", creditScore: 800, creditLimit: 150000, creditUtilization: 100000 },
     { id: 3, name: "123 Shop", location: "Port Harcourt", salesVolume: 30000, creditStatus: "Fair", creditScore: 600, creditLimit: 50000, creditUtilization: 40000 },
   ];

   const RetailerManagementPage = () => {
     const [retailers, setRetailers] = useState(mockRetailers);
     const [searchTerm, setSearchTerm] = useState('');
     const [filters, setFilters] = useState({ location: '', creditStatus: '' });
     const [selectedRetailer, setSelectedRetailer] = useState(null);
     const [isProfileOpen, setIsProfileOpen] = useState(false);
     const [isCreditDialogOpen, setIsCreditDialogOpen] = useState(false);
     const [newCreditLimit, setNewCreditLimit] = useState(0);

     useEffect(() => {
       // In a real application, you would fetch retailers data from an API here
       // For now, we're using the mock data
       setRetailers(mockRetailers);
     }, []);

     const handleSearch = (event) => {
       setSearchTerm(event.target.value);
     };

     const handleFilterChange = (filterType, value) => {
       setFilters(prevFilters => ({ ...prevFilters, [filterType]: value }));
     };

     const filteredRetailers = retailers.filter(retailer => 
       retailer.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
       (filters.location === '' || retailer.location === filters.location) &&
       (filters.creditStatus === '' || retailer.creditStatus === filters.creditStatus)
     );

     const openRetailerProfile = (retailer) => {
       setSelectedRetailer(retailer);
       setIsProfileOpen(true);
     };

     const closeRetailerProfile = () => {
       setIsProfileOpen(false);
       setSelectedRetailer(null);
     };

     const openCreditDialog = (retailer) => {
       setSelectedRetailer(retailer);
       setNewCreditLimit(retailer.creditLimit);
       setIsCreditDialogOpen(true);
     };

     const closeCreditDialog = () => {
       setIsCreditDialogOpen(false);
       setSelectedRetailer(null);
       setNewCreditLimit(0);
     };

     const updateCreditLimit = () => {
       // In a real application, you would make an API call to update the credit limit
       const updatedRetailers = retailers.map(retailer => 
         retailer.id === selectedRetailer.id ? { ...retailer, creditLimit: newCreditLimit } : retailer
       );
       setRetailers(updatedRetailers);
       closeCreditDialog();
     };

     return (
       <div className="p-6 max-w-7xl mx-auto">
         <h1 className="text-3xl font-bold mb-6">Retailer Management</h1>
         
         {/* Search and Filters */}
         <div className="flex flex-wrap gap-4 mb-6">
           <div className="flex-grow">
             <Input
               type="text"
               placeholder="Search retailers..."
               value={searchTerm}
               onChange={handleSearch}
               className="w-full"
             />
           </div>
           <DropdownMenu>
             <DropdownMenuTrigger asChild>
               <Button variant="outline">
                 <Filter className="h-4 w-4 mr-2" />
                 Filters
                 <ChevronDown className="h-4 w-4 ml-2" />
               </Button>
             </DropdownMenuTrigger>
             <DropdownMenuContent>
               <DropdownMenuItem onSelect={() => handleFilterChange('location', 'Lagos')}>
                 Location: Lagos
               </DropdownMenuItem>
               <DropdownMenuItem onSelect={() => handleFilterChange('location', 'Abuja')}>
                 Location: Abuja
               </DropdownMenuItem>
               <DropdownMenuItem onSelect={() => handleFilterChange('creditStatus', 'Good')}>
                 Credit Status: Good
               </DropdownMenuItem>
               <DropdownMenuItem onSelect={() => handleFilterChange('creditStatus', 'Excellent')}>
                 Credit Status: Excellent
               </DropdownMenuItem>
             </DropdownMenuContent>
           </DropdownMenu>
         </div>

         {/* Retailers Table */}
         <Card>
           <CardHeader>
             <CardTitle>Retailers</CardTitle>
           </CardHeader>
           <CardContent>
             <Table>
               <TableHeader>
                 <TableRow>
                   <TableHead>Name</TableHead>
                   <TableHead>Location</TableHead>
                   <TableHead>Sales Volume</TableHead>
                   <TableHead>Credit Status</TableHead>
                   <TableHead>Actions</TableHead>
                 </TableRow>
               </TableHeader>
               <TableBody>
                 {filteredRetailers.map(retailer => (
                   <TableRow key={retailer.id}>
                     <TableCell>{retailer.name}</TableCell>
                     <TableCell>{retailer.location}</TableCell>
                     <TableCell>₦{retailer.salesVolume.toLocaleString()}</TableCell>
                     <TableCell>
                       <Badge variant={retailer.creditStatus === 'Excellent' ? 'success' : retailer.creditStatus === 'Good' ? 'warning' : 'destructive'}>
                         {retailer.creditStatus}
                       </Badge>
                     </TableCell>
                     <TableCell>
                       <Button variant="ghost" size="sm" onClick={() => openRetailerProfile(retailer)}>
                         View Profile
                       </Button>
                       <Button variant="ghost" size="sm" onClick={() => openCreditDialog(retailer)}>
                         <CreditCard className="h-4 w-4 mr-2" />
                         Manage Credit
                       </Button>
                     </TableCell>
                   </TableRow>
                 ))}
               </TableBody>
             </Table>
           </CardContent>
         </Card>

         {/* Retailer Profile Dialog */}
         <Dialog open={isProfileOpen} onOpenChange={setIsProfileOpen}>
           <DialogContent>
             <DialogHeader>
               <DialogTitle>{selectedRetailer?.name} Profile</DialogTitle>
             </DialogHeader>
             {selectedRetailer && (
               <div className="mt-4">
                 <p><strong>Location:</strong> {selectedRetailer.location}</p>
                 <p><strong>Sales Volume:</strong> ₦{selectedRetailer.salesVolume.toLocaleString()}</p>
                 <p><strong>Credit Status:</strong> {selectedRetailer.creditStatus}</p>
                 <p><strong>Credit Score:</strong> {selectedRetailer.creditScore}</p>
                 <p><strong>Credit Limit:</strong> ₦{selectedRetailer.creditLimit.toLocaleString()}</p>
                 <p><strong>Credit Utilization:</strong> ₦{selectedRetailer.creditUtilization.toLocaleString()}</p>
                 
                 <h3 className="font-semibold mt-4 mb-2">Performance Dashboard</h3>
                 {/* Add performance charts or graphs here */}
                 <div className="bg-gray-100 p-4 rounded">
                   <p>Performance visualization placeholder</p>
                 </div>

                 <h3 className="font-semibold mt-4 mb-2">Recent Orders</h3>
                 {/* Add recent orders list here */}
                 <ul className="list-disc pl-5">
                   <li>Order #12345 - ₦5,000 - 2023-08-15</li>
                   <li>Order #12346 - ₦7,500 - 2023-08-10</li>
                   <li>Order #12347 - ₦3,200 - 2023-08-05</li>
                 </ul>

                 <h3 className="font-semibold mt-4 mb-2">Support Tickets</h3>
                 {/* Add support tickets list here */}
                 <ul className="list-disc pl-5">
                   <li>Ticket #001 - Payment Issue - Open</li>
                   <li>Ticket #002 - Product Inquiry - Closed</li>
                 </ul>
               </div>
             )}
           </DialogContent>
         </Dialog>

         {/* Credit Management Dialog */}
         <Dialog open={isCreditDialogOpen} onOpenChange={setIsCreditDialogOpen}>
           <DialogContent>
             <DialogHeader>
               <DialogTitle>Manage Credit for {selectedRetailer?.name}</DialogTitle>
             </DialogHeader>
             {selectedRetailer && (
               <div className="mt-4">
                 <p><strong>Current Credit Limit:</strong> ₦{selectedRetailer.creditLimit.toLocaleString()}</p>
                 <p><strong>Credit Utilization:</strong> ₦{selectedRetailer.creditUtilization.toLocaleString()}</p>
                 <p><strong>Credit Score:</strong> {selectedRetailer.creditScore}</p>
                 
                 <h3 className="font-semibold mt-4 mb-2">Adjust Credit Limit</h3>
                 <Slider
                   min={0}
                   max={500000}
                   step={10000}
                   value={[newCreditLimit]}
                   onValueChange={(value) => setNewCreditLimit(value[0])}
                 />
                 <p className="mt-2">New Credit Limit: ₦{newCreditLimit.toLocaleString()}</p>
                 
                 <Button className="mt-4" onClick={updateCreditLimit}>Update Credit Limit</Button>
               </div>
             )}
           </DialogContent>
         </Dialog>
       </div>
     );
   };

   export default RetailerManagementPage;