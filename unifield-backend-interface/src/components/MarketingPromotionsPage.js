import React, { useState, useEffect } from 'react';
import { 
  Megaphone, Target, TrendingUp, Gift, Clock, Award,
  Plus, Edit, Trash2, ChevronDown, Download, Calendar
} from 'lucide-react';
import { 
  Card, CardContent, CardHeader, CardTitle 
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
// import { DatePicker } from "@/components/ui/date-picker"; // Remove or comment this line
import { Select } from "@/components/ui/select";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Mock data for campaigns
const mockCampaigns = [
  { id: 1, name: "Summer Sale", target: "All Retailers", startDate: "2023-08-01", endDate: "2023-08-31", status: "Active", performance: 85 },
  { id: 2, name: "New User Promo", target: "New Retailers", startDate: "2023-09-01", endDate: "2023-09-30", status: "Scheduled", performance: 0 },
  { id: 3, name: "Holiday Special", target: "Top Performers", startDate: "2023-12-01", endDate: "2023-12-31", status: "Draft", performance: 0 },
];

// Mock data for promotions
const mockPromotions = [
  { id: 1, name: "10% Off Electronics", type: "Discount", value: "10%", startDate: "2023-08-15", endDate: "2023-08-20", status: "Active" },
  { id: 2, name: "Buy 2 Get 1 Free", type: "Bundle", value: "3 for 2", startDate: "2023-09-01", endDate: "2023-09-07", status: "Scheduled" },
  { id: 3, name: "Flash Sale: 50% Off", type: "Flash Sale", value: "50%", startDate: "2023-08-25", endDate: "2023-08-25", status: "Scheduled" },
];

// Mock data for loyalty program
const mockLoyaltyProgram = {
  name: "UniField Rewards",
  pointsPerPurchase: 1,
  pointValue: 0.01,
  tiers: [
    { name: "Bronze", threshold: 0, perks: ["5% discount on orders"] },
    { name: "Silver", threshold: 1000, perks: ["7% discount on orders", "Free shipping"] },
    { name: "Gold", threshold: 5000, perks: ["10% discount on orders", "Free shipping", "Priority support"] },
  ]
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const MarketingPromotionsPage = () => {
  const [activeTab, setActiveTab] = useState('campaigns');
  const [campaigns, setCampaigns] = useState(mockCampaigns);
  const [promotions, setPromotions] = useState(mockPromotions);
  const [loyaltyProgram, setLoyaltyProgram] = useState(mockLoyaltyProgram);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [isCampaignDialogOpen, setIsCampaignDialogOpen] = useState(false);
  const [selectedPromotion, setSelectedPromotion] = useState(null);
  const [isPromotionDialogOpen, setIsPromotionDialogOpen] = useState(false);

  useEffect(() => {
    // In a real application, you would fetch marketing data from an API here
    // For now, we're using the mock data
    setCampaigns(mockCampaigns);
    setPromotions(mockPromotions);
    setLoyaltyProgram(mockLoyaltyProgram);
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCampaigns = campaigns.filter(campaign => 
    campaign.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    campaign.target.toLowerCase().includes(searchTerm.toLowerCase()) ||
    campaign.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPromotions = promotions.filter(promotion => 
    promotion.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    promotion.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    promotion.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openCampaignDialog = (campaign = null) => {
    setSelectedCampaign(campaign);
    setIsCampaignDialogOpen(true);
  };

  const closeCampaignDialog = () => {
    setIsCampaignDialogOpen(false);
    setSelectedCampaign(null);
  };

  const openPromotionDialog = (promotion = null) => {
    setSelectedPromotion(promotion);
    setIsPromotionDialogOpen(true);
  };

  const closePromotionDialog = () => {
    setIsPromotionDialogOpen(false);
    setSelectedPromotion(null);
  };

  const handleCampaignUpdate = (updatedCampaign) => {
    // In a real application, you would make an API call to update the campaign
    const updatedCampaigns = campaigns.map(campaign => 
      campaign.id === updatedCampaign.id ? updatedCampaign : campaign
    );
    setCampaigns(updatedCampaigns);
    closeCampaignDialog();
  };

  const handlePromotionUpdate = (updatedPromotion) => {
    // In a real application, you would make an API call to update the promotion
    const updatedPromotions = promotions.map(promotion => 
      promotion.id === updatedPromotion.id ? updatedPromotion : promotion
    );
    setPromotions(updatedPromotions);
    closePromotionDialog();
  };

  const renderCampaignManagement = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Campaign Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <Input
              type="text"
              placeholder="Search campaigns..."
              value={searchTerm}
              onChange={handleSearch}
              className="max-w-sm"
            />
            <Button onClick={() => openCampaignDialog()}>
              <Plus className="mr-2 h-4 w-4" /> Create New Campaign
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Campaign Name</TableHead>
                <TableHead>Target</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>End Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Performance</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCampaigns.map((campaign) => (
                <TableRow key={campaign.id}>
                  <TableCell>{campaign.name}</TableCell>
                  <TableCell>{campaign.target}</TableCell>
                  <TableCell>{campaign.startDate}</TableCell>
                  <TableCell>{campaign.endDate}</TableCell>
                  <TableCell>
                    <Badge variant={
                      campaign.status === 'Active' ? 'success' :
                      campaign.status === 'Scheduled' ? 'warning' :
                      'secondary'
                    }>
                      {campaign.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {campaign.status === 'Active' ? `${campaign.performance}%` : 'N/A'}
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" onClick={() => openCampaignDialog(campaign)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={isCampaignDialogOpen} onOpenChange={setIsCampaignDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedCampaign ? 'Edit Campaign' : 'Create New Campaign'}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="campaignName" className="text-right">
                Campaign Name
              </label>
              <Input id="campaignName" value={selectedCampaign?.name || ''} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="campaignTarget" className="text-right">
                Target
              </label>
              <Select id="campaignTarget" value={selectedCampaign?.target || ''} className="col-span-3">
                <option value="All Retailers">All Retailers</option>
                <option value="New Retailers">New Retailers</option>
                <option value="Top Performers">Top Performers</option>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="campaignStartDate" className="text-right">
                Start Date
              </label>
              <Input type="date" id="campaignStartDate" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="campaignEndDate" className="text-right">
                End Date
              </label>
              <Input type="date" id="campaignEndDate" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="campaignStatus" className="text-right">
                Status
              </label>
              <Select id="campaignStatus" value={selectedCampaign?.status || ''} className="col-span-3">
                <option value="Active">Active</option>
                <option value="Scheduled">Scheduled</option>
                <option value="Draft">Draft</option>
              </Select>
            </div>
          </div>
          <Button onClick={closeCampaignDialog}>
            {selectedCampaign ? 'Update Campaign' : 'Create Campaign'}
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );

  const renderPromotionSetup = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Promotion Setup</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <Input
              type="text"
              placeholder="Search promotions..."
              value={searchTerm}
              onChange={handleSearch}
              className="max-w-sm"
            />
            <Button onClick={() => openPromotionDialog()}>
              <Plus className="mr-2 h-4 w-4" /> Create New Promotion
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Promotion Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>End Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPromotions.map((promotion) => (
                <TableRow key={promotion.id}>
                  <TableCell>{promotion.name}</TableCell>
                  <TableCell>{promotion.type}</TableCell>
                  <TableCell>{promotion.value}</TableCell>
                  <TableCell>{promotion.startDate}</TableCell>
                  <TableCell>{promotion.endDate}</TableCell>
                  <TableCell>
                    <Badge variant={
                      promotion.status === 'Active' ? 'success' :
                      promotion.status === 'Scheduled' ? 'warning' :
                      'secondary'
                    }>
                      {promotion.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" onClick={() => openPromotionDialog(promotion)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={isPromotionDialogOpen} onOpenChange={setIsPromotionDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedPromotion ? 'Edit Promotion' : 'Create New Promotion'}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="promotionName" className="text-right">
                Promotion Name
              </label>
              <Input id="promotionName" value={selectedPromotion?.name || ''} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="promotionType" className="text-right">
                Type
              </label>
              <Select id="promotionType" value={selectedPromotion?.type || ''} className="col-span-3">
                <option value="Discount">Discount</option>
                <option value="Bundle">Bundle</option>
                <option value="Flash Sale">Flash Sale</option>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap
            -4">
              <label htmlFor="promotionValue" className="text-right">
                Value
              </label>
              <Input id="promotionValue" value={selectedPromotion?.value || ''} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="promotionStartDate" className="text-right">
                Start Date
              </label>
              <DatePicker id="promotionStartDate" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="promotionEndDate" className="text-right">
                End Date
              </label>
              <DatePicker id="promotionEndDate" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="promotionStatus" className="text-right">
                Status
              </label>
              <Select id="promotionStatus" value={selectedPromotion?.status || ''} className="col-span-3">
                <option value="Active">Active</option>
                <option value="Scheduled">Scheduled</option>
                <option value="Draft">Draft</option>
              </Select>
            </div>
          </div>
          <Button onClick={closePromotionDialog}>
            {selectedPromotion ? 'Update Promotion' : 'Create Promotion'}
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );

  const renderLoyaltyProgram = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Loyalty Program: {loyaltyProgram.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold">Points per Purchase:</p>
              <p>{loyaltyProgram.pointsPerPurchase} point(s) per ₦1 spent</p>
            </div>
            <div>
              <p className="font-semibold">Point Value:</p>
              <p>₦{loyaltyProgram.pointValue.toFixed(2)} per point</p>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Loyalty Tiers</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tier Name</TableHead>
                  <TableHead>Points Threshold</TableHead>
                  <TableHead>Perks</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loyaltyProgram.tiers.map((tier, index) => (
                  <TableRow key={index}>
                    <TableCell>{tier.name}</TableCell>
                    <TableCell>{tier.threshold} points</TableCell>
                    <TableCell>
                      <ul className="list-disc list-inside">
                        {tier.perks.map((perk, perkIndex) => (
                          <li key={perkIndex}>{perk}</li>
                        ))}
                      </ul>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Marketing & Promotions</h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Actions <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Generate Campaign Report</DropdownMenuItem>
            <DropdownMenuItem>Export Promotion Data</DropdownMenuItem>
            <DropdownMenuItem>Manage Loyalty Program Settings</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex space-x-4 mb-6">
        <Button
          variant={activeTab === 'campaigns' ? 'default' : 'outline'}
          onClick={() => setActiveTab('campaigns')}
        >
          <Megaphone className="mr-2 h-4 w-4" /> Campaigns
        </Button>
        <Button
          variant={activeTab === 'promotions' ? 'default' : 'outline'}
          onClick={() => setActiveTab('promotions')}
        >
          <Gift className="mr-2 h-4 w-4" /> Promotions
        </Button>
        <Button
          variant={activeTab === 'loyalty' ? 'default' : 'outline'}
          onClick={() => setActiveTab('loyalty')}
        >
          <Award className="mr-2 h-4 w-4" /> Loyalty Program
        </Button>
      </div>

      {activeTab === 'campaigns' && renderCampaignManagement()}
      {activeTab === 'promotions' && renderPromotionSetup()}
      {activeTab === 'loyalty' && renderLoyaltyProgram()}
    </div>
  );
};

export default MarketingPromotionsPage;