async function deleteFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/trip/${id}`, {
    method: "DELETE",
    body: JSON.stringify({ trip_id: id }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert(response.statusText);
  }
}

document
  .getElementById("delete-trip-btn")
  .addEventListener("click", deleteFormHandler);
