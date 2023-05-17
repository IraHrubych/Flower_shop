(function() {
  const resetBtn = document.querySelector('#reset');
  const avatarEl = document.querySelector('#avatarEl');
  const nameEl = document.querySelector('#nameEl');
  const emailEl = document.querySelector('#emailEl');
  const adressEl = document.querySelector('#adressEl');

  const setNewManager = data => {
    const { name, picture, email, location } = data;

    avatarEl.src = picture.large;
    nameEl.innerHTML = `${name.title} ${name.first} ${name.last}`;
    emailEl.innerHTML = email;
    adressEl.innerHTML = `${location.city}, ${location.country}, ${location.street.name}, ${location.street.number}` ;
  };

  const managerLoad = () => {
    $.ajax({
      url: 'https://randomuser.me/api/',
      dataType: 'json',
      success: data => {
        setNewManager(data.results[0]);
      },
    });
  };

  resetBtn.addEventListener('click', () => {
    managerLoad();
  });

  managerLoad();
})();
