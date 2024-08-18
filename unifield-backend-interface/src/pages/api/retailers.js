export default function handler(req, res) {
    if (req.method === 'GET') {
      // Fetch retailers from database
      res.status(200).json(mockRetailers)
    } else if (req.method === 'POST') {
      // Add new retailer
    } else if (req.method === 'PUT') {
      // Update retailer
    } else if (req.method === 'DELETE') {
      // Delete retailer
    }
  }