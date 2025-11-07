document.getElementById('yes-button').addEventListener('click', () => {
    document.getElementById('date-form').style.display = 'block';
});

document.getElementById('no-button').addEventListener('click', () => {
    alert('Aww, maybe next time?');
});

document.getElementById('submit-button').addEventListener('click', (e) => {
    e.preventDefault();
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const place = document.getElementById('place').value;
    const subject = 'Date Proposal Response';
    const body = `Date: ${date}\nTime: ${time}\nPlace: ${place}`;
    const mailtoLink = `mailto:aldrinpradia2020@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    document.getElementById('date-form').style.display = 'none';
    document.getElementById('thank-you-message').style.display = 'block';
});