const API = process.env.NEXT_PUBLIC_API_URL;

export async function getUsers() {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API}/admin/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
}

export async function getUserById(id: any) {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API}/admin/users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
}

export async function changeRole(id: any, role: string) {
  const token = localStorage.getItem("token");

  await fetch(`${API}/admin/users/${id}/role`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ role }),
  });
}
