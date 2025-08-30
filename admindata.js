async function loadUsers() {
    try {
        const response = await fetch("http://localhost:");
        const users = await response.json();

        const tbody = document.querySelector("#userTable tbody");
        tbody.innerHTML = "";

        if (users.length === 0) {
            const newrow = document.createElement('tr');
            newrow.classList.add('placeholder');
            newrow.innerHTML(`<td colspan="5">&nbsp;</td>`);
            tbody.appendChild(newrow);
        } else {
            users.forEach(user => {
                 const row = document.createElement('tr');
                row.innerHTML = `<td class = "scholar-id">${user.scholar-id}</td>
                <td class = "name">${user.name}</td>
                <td class = "email">${user.email}</td>
                <td class = "hostel">${user.hostel}</td>
                <td class = "mobile-no.">${user.mobile-no}</td>`;
                tbody.appendChild(row);
            });
        }
    } catch (error) {
        console.error("Error loading user data:", error);
    }
}

loadUsers();