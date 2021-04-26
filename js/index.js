
tinymce.init({
    selector: '#desc-txt',
    height: 200,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });
  
  const pokemones = [];//Definir arreglo
  const cargarTabla = ()=>{
    let tbody = document.querySelector("#tbody-tabla");
    tbody.innerHTML = "";
    for(let i=0; i < pokemones.length; ++i){
      let p = pokemones[i];

      let tr = document.createElement("tr");

      let tdNro = document.createElement("td");
      let tdNombre = document.createElement("td");
      let tdTipo = document.createElement("td");
      let tdDesc = document.createElement("td");
      let tdAcciones = document.createElement("td");

      tdNro.innerText = i+1;
      tdNombre.innerText = p.nombre;
      
      let tipo =document.createElement("i");
      if (p.tipo == "1"){
        //tipo Planta <i class="fas fa-leaf"></i>
        tipo.classList.add("fas", "fa-leaf","fa-3x", "text-success");
      }else if(p.tipo == "2"){
        //tipo fuego <i class="fas fa-fire"></i>
        tipo.classList.add("fas","fa-fire","fa-3x", "text-danger");
      }else if(p.tipo == "3"){
        //tipo electrico <i class="fas fa-bolt"></i>
        tipo.classList.add("fas","fa-bolt","fa-3x", "text-warning");
      }else if(p.tipo == "4"){
        //tipo awa <i class="fas fa-tint"></i>
        tipo.classList.add("fas", "fa-tint","fa-3x", "text-primary");
      }else {
        //tipo normie <i class="fas fa-bullseye"></i>
        tipo.classList.add("fas","fa-bullseye","fa-3x", "text-secondary");
      }
      tdTipo.appendChild(tipo);
      tdTipo.classList.add("text-center")
      tdDesc.innerHTML =p.descripcion;

      tr.appendChild(tdNro);
      tr.appendChild(tdNombre);
      tr.appendChild(tdTipo);
      tr.appendChild(tdDesc);
      tr.appendChild(tdAcciones);

      tbody.appendChild(tr);
    }
  }

  document.querySelector("#registrar-btn").addEventListener("click", ()=>{
      let nombre = document.querySelector("#nombre-txt").value;
      let tipo = document.querySelector("#tipo-select").value;
      let legendario = document.querySelector("#legend-si").checked;
      let descripcion = tinymce.get("desc-txt").getContent(); //Solo tinymce    
      //Crea objeto
      let pokemon = {};
      //Crea atributo
      pokemon.nombre = nombre;
      pokemon.tipo = tipo;
      pokemon.legendario = legendario;
      pokemon.descripcion = descripcion;

      pokemones.push(pokemon);
      cargarTabla();
      Swal.fire("Resultado exitoso!", "Pokémon registrado", "info")

  } );