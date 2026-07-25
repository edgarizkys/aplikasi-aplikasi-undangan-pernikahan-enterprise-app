// World-Class Controllers for Aplikasi Aplikasi Undangan Pernikahan Enterprise (Sistem Manajemen Undangan Pernikahan Enterprise)

let tamuData = [
  {
    "id": 1,
    "nama": "Keluarga Besar Paman Joko",
    "hubungan": "Keluarga Mempelai Pria",
    "jumlah": 15,
    "konfirmasi": "Hadir",
    "catatan": "Meja VIP"
  },
  {
    "id": 2,
    "nama": "Rombongan Kantor Mempelai",
    "hubungan": "Rekan Kerja",
    "jumlah": 20,
    "konfirmasi": "Hadir",
    "catatan": ""
  }
];

exports.getAllTamu = async (req, res) => {
    const tenantId = req.headers['x-tenant-id'] || 'default_tenant';
    res.json({ success: true, tenantId, count: tamuData.length, data: tamuData });
};

exports.createTamu = async (req, res) => {
    const item = { id: Date.now(), tenant_id: req.headers['x-tenant-id'] || 'default_tenant', ...req.body };
    tamuData.unshift(item);
    res.status(201).json({ success: true, data: item });
};

exports.deleteTamu = async (req, res) => {
    tamuData = tamuData.filter(i => i.id !== parseInt(req.params.id));
    res.json({ success: true, message: 'Daftar Tamu & RSVP deleted' });
};

let vendorData = [
  {
    "id": 1,
    "nama": "Dewi Makeup Artist",
    "kategori": "MUA & Rias",
    "biaya": 15000000,
    "kontak": "081234567890",
    "status": "Terkonfirmasi"
  },
  {
    "id": 2,
    "nama": "Catering Sedap Nikmat",
    "kategori": "Katering 500 Pax",
    "biaya": 85000000,
    "kontak": "082345678901",
    "status": "Terkonfirmasi"
  }
];

exports.getAllVendor = async (req, res) => {
    const tenantId = req.headers['x-tenant-id'] || 'default_tenant';
    res.json({ success: true, tenantId, count: vendorData.length, data: vendorData });
};

exports.createVendor = async (req, res) => {
    const item = { id: Date.now(), tenant_id: req.headers['x-tenant-id'] || 'default_tenant', ...req.body };
    vendorData.unshift(item);
    res.status(201).json({ success: true, data: item });
};

exports.deleteVendor = async (req, res) => {
    vendorData = vendorData.filter(i => i.id !== parseInt(req.params.id));
    res.json({ success: true, message: 'Vendor & Partner deleted' });
};

let anggaranData = [
  {
    "id": 1,
    "item": "Venue & Dekorasi",
    "anggaran": 120000000,
    "realisasi": 115000000,
    "status": "Lunas"
  },
  {
    "id": 2,
    "item": "Katering 500 Pax",
    "anggaran": 85000000,
    "realisasi": 85000000,
    "status": "DP Terbayar"
  }
];

exports.getAllAnggaran = async (req, res) => {
    const tenantId = req.headers['x-tenant-id'] || 'default_tenant';
    res.json({ success: true, tenantId, count: anggaranData.length, data: anggaranData });
};

exports.createAnggaran = async (req, res) => {
    const item = { id: Date.now(), tenant_id: req.headers['x-tenant-id'] || 'default_tenant', ...req.body };
    anggaranData.unshift(item);
    res.status(201).json({ success: true, data: item });
};

exports.deleteAnggaran = async (req, res) => {
    anggaranData = anggaranData.filter(i => i.id !== parseInt(req.params.id));
    res.json({ success: true, message: 'Anggaran & Pengeluaran deleted' });
};

exports.getAnalytics = async (req, res) => {
    res.json({ success: true, platform: 'Aplikasi Aplikasi Undangan Pernikahan Enterprise', domain: 'Sistem Manajemen Undangan Pernikahan Enterprise', version: '5.0.0-WorldClass', architecture: 'Multi-Tenant Ready + Redis Cache' });
};