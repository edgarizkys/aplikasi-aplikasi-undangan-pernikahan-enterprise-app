const { createClient } = require('@libsql/client');

const tursoClient = createClient({
    url: process.env.TURSO_DATABASE_URL || 'libsql://edgartech-db-edgarizkys.turso.io',
    authToken: process.env.TURSO_AUTH_TOKEN || ''
});

async function initializeDatabase() {
    try {
        await tursoClient.execute(`CREATE TABLE IF NOT EXISTS tamu (id INTEGER PRIMARY KEY AUTOINCREMENT, tenant_id TEXT DEFAULT 'default', nama TEXT NOT NULL, hubungan TEXT NOT NULL, jumlah REAL NOT NULL, konfirmasi TEXT NOT NULL, catatan TEXT NOT NULL, created_at DATETIME DEFAULT CURRENT_TIMESTAMP)`);
        console.log('[DB] Table tamu (Multi-Tenant) ready');
        await tursoClient.execute(`CREATE TABLE IF NOT EXISTS vendor (id INTEGER PRIMARY KEY AUTOINCREMENT, tenant_id TEXT DEFAULT 'default', nama TEXT NOT NULL, kategori TEXT NOT NULL, biaya REAL NOT NULL, kontak TEXT NOT NULL, status TEXT NOT NULL, created_at DATETIME DEFAULT CURRENT_TIMESTAMP)`);
        console.log('[DB] Table vendor (Multi-Tenant) ready');
        await tursoClient.execute(`CREATE TABLE IF NOT EXISTS anggaran (id INTEGER PRIMARY KEY AUTOINCREMENT, tenant_id TEXT DEFAULT 'default', item TEXT NOT NULL, anggaran REAL NOT NULL, realisasi REAL NOT NULL, status TEXT NOT NULL, created_at DATETIME DEFAULT CURRENT_TIMESTAMP)`);
        console.log('[DB] Table anggaran (Multi-Tenant) ready');
    } catch(e) { console.log('DB Notice:', e.message); }
}

module.exports = { tursoClient, initializeDatabase };