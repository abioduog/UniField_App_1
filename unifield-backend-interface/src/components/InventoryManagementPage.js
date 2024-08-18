import React, { useState, useEffect } from 'react';
import { 
  Package, Edit, Trash2, Plus, Search, Filter, 
  TrendingUp, TrendingDown, AlertTriangle, Truck, 
  BarChart2, DollarSign, RefreshCw
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

// Mock data for products
const mockProducts = [
  { id: 1, name: "Coca-Cola 500ml", sku: "CC500", category: "Beverages", price: 150, stock: 500, supplier: "Coca-Cola Company" },
  { id: 2, name: "Indomie Noodles", sku: "IN100", category: "Food", price: 120, stock: 1000, supplier: "Dufil Prima Foods" },
  { id: 3, name: "Peak Milk 170g", sku: "PM170", category: "Dairy", price: 200, stock: 300, supplier: "FrieslandCampina" },
  { id: 4, name: "Samsung A12", sku: "SA12", category: "Electronics", price: 65000, stock: 50, supplier: "Samsung Electronics" },
];

// Mock data for suppliers
const mockSuppliers = [
  { id: 1, name: "Coca-Cola Company", reliability: 95, avgDeliveryTime: 2 },
  { id: 2, name: "Dufil Prima Foods", reliability: 90, avgDeliveryTime: 3 },
  { id: 3, name: "FrieslandCampina", reliability: 92, avgDeliveryTime: 2 },
  { id: 4, name: "Samsung Electronics", reliability: 88, avgDeliveryTime: 5 },
];

const InventoryManagementPage = () => {
  const [activeTab, setActiveTab] = useState('products');
  const [products, setProducts] = useState(mockProducts);
  const [suppliers, setSuppliers] = useState(mockSuppliers);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isProductDialogOpen, setIsProductDialogOpen] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [isSupplierDialogOpen, setIsSupplierDialogOpen] = useState(false);

  useEffect(() => {
    // In a real application, you would fetch products and suppliers data from an API here
    // For now, we're using the mock data
    setProducts(mockProducts);
    setSuppliers(mockSuppliers);
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredSuppliers = suppliers.filter(supplier => 
    supplier.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openProductDialog = (product = null) => {
    setSelectedProduct(product);
    setIsProductDialogOpen(true);
  };

  const closeProductDialog = () => {
    setIsProductDialogOpen(false);
    setSelectedProduct(null);
  };

  const openSupplierDialog = (supplier = null) => {
    setSelectedSupplier(supplier);
    setIsSupplierDialogOpen(true);
  };

  const closeSupplierDialog = () => {
    setIsSupplierDialogOpen(false);
    setSelectedSupplier(null);
  };

  const handleProductUpdate = (updatedProduct) => {
    // In a real application, you would make an API call to update the product
    const updatedProducts = products.map(product => 
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setProducts(updatedProducts);
    closeProductDialog();
  };

  const handleSupplierUpdate = (updatedSupplier) => {
    // In a real application, you would make an API call to update the supplier
    const updatedSuppliers = suppliers.map(supplier => 
      supplier.id === updatedSupplier.id ? updatedSupplier : supplier
    );
    setSuppliers(updatedSuppliers);
    closeSupplierDialog();
  };

  const renderProductCatalog = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Product Catalog</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <Input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearch}
              className="max-w-sm"
            />
            <Button onClick={() => openProductDialog()}>
              <Plus className="mr-2 h-4 w-4" /> Add New Product
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>SKU</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Supplier</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.sku}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>₦{product.price}</TableCell>
                  <TableCell>
                    <Badge variant={product.stock > 100 ? "success" : product.stock > 50 ? "warning" : "destructive"}>
                      {product.stock}
                    </Badge>
                  </TableCell>
                  <TableCell>{product.supplier}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" onClick={() => openProductDialog(product)}>
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

      <Dialog open={isProductDialogOpen} onOpenChange={setIsProductDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedProduct ? 'Edit Product' : 'Add New Product'}</DialogTitle>
          </DialogHeader>
          {/* Add form fields for product details here */}
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="name" className="text-right">
                Name
              </label>
              <Input id="name" value={selectedProduct?.name || ''} className="col-span-3" />
            </div>
            {/* Add more form fields for SKU, category, price, stock, supplier */}
          </div>
          <Button onClick={closeProductDialog}>Save Changes</Button>
        </DialogContent>
      </Dialog>
    </div>
  );

  const renderStockManagement = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Stock Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              ₦{products.reduce((total, product) => total + (product.price * product.stock), 0).toLocaleString()}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Low Stock Items</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {products.filter(product => product.stock <= 50).length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Out of Stock Items</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {products.filter(product => product.stock === 0).length}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Stock Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Current Stock</TableHead>
                <TableHead>Reorder Point</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.filter(product => product.stock <= 50).map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>50</TableCell>
                  <TableCell>
                    <Badge variant={product.stock === 0 ? "destructive" : "warning"}>
                      {product.stock === 0 ? "Out of Stock" : "Low Stock"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      Reorder
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Stock Forecast</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] bg-gray-100 flex items-center justify-center">
            <p className="text-gray-500">Stock forecast chart placeholder</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderSupplierManagement = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Supplier Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <Input
              type="text"
              placeholder="Search suppliers..."
              value={searchTerm}
              onChange={handleSearch}
              className="max-w-sm"
            />
            <Button onClick={() => openSupplierDialog()}>
              <Plus className="mr-2 h-4 w-4" /> Add New Supplier
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Reliability</TableHead>
                <TableHead>Avg. Delivery Time</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSuppliers.map((supplier) => (
                <TableRow key={supplier.id}>
                  <TableCell>{supplier.name}</TableCell>
                  <TableCell>
                    <Badge variant={supplier.reliability >= 90 ? "success" : supplier.reliability >= 80 ? "warning" : "destructive"}>
                      {supplier.reliability}%
                    </Badge>
                  </TableCell>
                  <TableCell>{supplier.avgDeliveryTime} days</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" onClick={() => openSupplierDialog(supplier)}>
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

      <Dialog open={isSupplierDialogOpen} onOpenChange={setIsSupplierDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedSupplier ? 'Edit Supplier' : 'Add New Supplier'}</DialogTitle>
          </DialogHeader>
          {/* Add form fields for supplier details here */}
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="supplierName" className="text-right">
                Name
              </label>
              <Input id="supplierName" value={selectedSupplier?.name || ''} className="col-span-3" />
            </div>
            {/* Add more form fields for reliability, average delivery time, etc. */}
          </div>
          <Button onClick={closeSupplierDialog}>Save Changes</Button>
        </DialogContent>
      </Dialog>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Inventory Management</h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Actions <RefreshCw className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Import Products</DropdownMenuItem>
            <DropdownMenuItem>Export Inventory Report</DropdownMenuItem>
            <DropdownMenuItem>Bulk Price Update</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex space-x-4 mb-6">
        <Button
          variant={activeTab === 'products' ? 'default' : 'outline'}
          onClick={() => setActiveTab('products')}
        >
          <Package className="mr-2 h-4 w-4" /> Products
        </Button>
        <Button
        variant={activeTab === 'stock' ? 'default' : 'outline'}
        onClick={() => setActiveTab('stock')}
      >
        <BarChart2 className="mr-2 h-4 w-4" /> Stock
      </Button>
      <Button
        variant={activeTab === 'suppliers' ? 'default' : 'outline'}
        onClick={() => setActiveTab('suppliers')}
      >
        <Truck className="mr-2 h-4 w-4" /> Suppliers
      </Button>
    </div>

    {activeTab === 'products' && renderProductCatalog()}
    {activeTab === 'stock' && renderStockManagement()}
    {activeTab === 'suppliers' && renderSupplierManagement()}
  </div>
);
};

export default InventoryManagementPage;