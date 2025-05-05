<script>
  function showPopup() {
    const phone = document.getElementById('phoneNumber').value || "0798984105";
    const message = `QF45T13XY Confirmed. Ksh500.00 sent to Ian Mbalasi ${phone} on 02/05/2025 at 17:14 PM.<br>
      New M-PESA balance is Ksh3,500.00.<br>
      Transaction cost, Ksh6.00.<br>
      Pay with M-PESA Global or Lipa na M-PESA.`;

    const popup = document.getElementById('mpesaPopup');
    document.getElementById('mpesaMessageText').innerHTML = message;

    popup.style.display = 'block';

    // Automatically hide after 8 seconds (optional if using animation)
    setTimeout(() => {
      popup.style.display = 'none';
    }, 8000);
  }
</script>