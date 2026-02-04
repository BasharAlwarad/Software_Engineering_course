// localStorage keys
const USERS_KEY = 'users';
const THEME_KEY = 'theme';

// DOM references
const usersContainer = document.getElementById('usersContainer');
const userForm = document.getElementById('userForm');
const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const saveButton = document.getElementById('saveButton');
const cancelButton = document.getElementById('cancelButton');
const themeSelect = document.getElementById('themeSelect');

// Track which user is being edited
let editingId = null;

// Starter data (1–5)
const defaultUsers = [
  { id: 1, name: 'User One', email: 'user1@example.com' },
  { id: 2, name: 'User Two', email: 'user2@example.com' },
  { id: 3, name: 'User Three', email: 'user3@example.com' },
  { id: 4, name: 'User Four', email: 'user4@example.com' },
  { id: 5, name: 'User Five', email: 'user5@example.com' },
];

// Read users from storage
function getUsers() {
  const raw = localStorage.getItem(USERS_KEY);
  return raw ? JSON.parse(raw) : [];
}

// Save users to storage
function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

// Seed initial users once
function seedUsersIfEmpty() {
  if (!localStorage.getItem(USERS_KEY)) {
    saveUsers(defaultUsers);
  }
}

// Render user cards
function renderUsers() {
  const users = getUsers();
  usersContainer.innerHTML = '';

  users.forEach((user) => {
    const card = document.createElement('div');
    card.className =
      'rounded-2xl bg-white p-5 shadow-lg dark:bg-slate-900 transition-shadow hover:shadow-xl';
    card.innerHTML = `
      <h3 class="text-lg font-semibold">${user.name}</h3>
      <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">${user.email}</p>
      <div class="mt-4 flex gap-2">
        <button
          data-action="update"
          data-id="${user.id}"
          class="flex-1 rounded-lg bg-emerald-600 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
        >
          Update
        </button>
        <button
          data-action="delete"
          data-id="${user.id}"
          class="flex-1 rounded-lg bg-rose-600 px-3 py-2 text-sm font-semibold text-white hover:bg-rose-700"
        >
          Delete
        </button>
      </div>
		`;

    usersContainer.appendChild(card);
  });
}

// Reset form UI to add mode
function resetForm() {
  editingId = null;
  userForm.reset();
  saveButton.textContent = 'Add User';
  cancelButton.hidden = true;
}

// Apply and persist theme
function setTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  localStorage.setItem(THEME_KEY, theme);
}

// Load theme on startup
function initTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY) || 'light';
  themeSelect.value = savedTheme;
  setTheme(savedTheme);
}

// Add or update a user
userForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (!name || !email) return;

  const users = getUsers();

  if (editingId) {
    const index = users.findIndex((user) => user.id === editingId);
    if (index !== -1) {
      users[index] = { ...users[index], name, email };
    }
  } else {
    const nextId = users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1;
    users.push({ id: nextId, name, email });
  }

  saveUsers(users);
  renderUsers();
  resetForm();
});

cancelButton.addEventListener('click', () => {
  resetForm();
});

// Handle update/delete actions
usersContainer.addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (!button) return;

  const id = Number(button.dataset.id);
  const action = button.dataset.action;
  const users = getUsers();

  if (action === 'delete') {
    const updatedUsers = users.filter((user) => user.id !== id);
    saveUsers(updatedUsers);
    renderUsers();
    if (editingId === id) {
      resetForm();
    }
  }

  if (action === 'update') {
    const user = users.find((u) => u.id === id);
    if (!user) return;
    editingId = id;
    nameInput.value = user.name;
    emailInput.value = user.email;
    saveButton.textContent = 'Save Update';
    cancelButton.hidden = false;
  }
});

// Theme dropdown
themeSelect.addEventListener('change', (event) => {
  setTheme(event.target.value);
});

// Bootstrapping
seedUsersIfEmpty();
initTheme();
renderUsers();
