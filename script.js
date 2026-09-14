function tambahTugas() {
    let input = document.getElementById("taskInput");
    let tugas = input.value.trim();

    if (tugas === "") {
        alert("Silakan masukkan tugas terlebih dahulu!");
        return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = tugas;

    // Menandai tugas selesai
    span.onclick = function() {
        span.classList.toggle("selesai");
    };

    // Tombol hapus
    let tombolHapus = document.createElement("button");
    tombolHapus.textContent = "Hapus";
    tombolHapus.className = "hapus";

    tombolHapus.onclick = function() {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(tombolHapus);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

function hapusSemua() {
    document.getElementById("taskList").innerHTML = "";
}