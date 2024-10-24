
        function openPreview() {
            document.getElementById('previewName').innerText = document.getElementById('name').value;
            document.getElementById('previewEmail').innerText = document.getElementById('email').value;
            document.getElementById('previewPhone').innerText = document.getElementById('phone').value;
            document.getElementById('previewService').innerText = document.getElementById('service').value;
            document.getElementById('previewMessage').innerText = document.getElementById('message').value;
            document.getElementById('previewModal').style.display = 'block';
        }

        function closePreview() {
            document.getElementById('previewModal').style.display = 'none';
        }
 