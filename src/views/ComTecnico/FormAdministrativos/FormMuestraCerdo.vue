<template>
  <LoadingSpinner :isLoading="isLoading" />
  <ToastNotification
    v-if="toastMessage"
    :message="toastMessage"
    :type="toastType"
  />
  <div class="pb-5">
    <div class="row g-4">
      <div class="col-12 col-xxl-9">
        <div class="mb-5">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb mb-3">
              <li class="breadcrumb-item">
                <router-link to="/home">Inicio</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/comtecnico">Componente tecnico</router-link>
              </li>
              <li class="breadcrumb-item">Toma de muestra carne de cerdo</li>
            </ol>
          </nav>
          <h2>TOMA DE MUESTRA PRODUCTO CARNE DE CERDO</h2>
          <hr />
        </div>
        <form @submit.prevent="guardarFormulario">
          <div class="row mb-1">
            <div class="col-md-4">
              <label class="form-label">ETC:</label>
              <input type="text" class="form-control" />
            </div>
            <div class="col-md-4">
              <label class="form-label">Operador:</label>
              <input type="text" class="form-control" />
            </div>

            <div class="col-md-4">
              <label class="form-label">N° Contrato:</label>
              <input type="text" class="form-control" />
            </div>
            <div class="col-md-4">
              <label class="form-label">Municipio:</label>
              <input type="text" class="form-control" />
            </div>

            <div class="col-md-4">
              <label class="form-label">Dirección:</label>
              <input type="text" class="form-control" />
            </div>
            <div class="col-md-4">
              <label class="form-label">Fecha:</label>
              <input type="date" class="form-control" />
            </div>

            <div class="col-md-4">
              <label class="form-label">Producto:</label>
              <input type="text" class="form-control" />
            </div>
            <div class="col-md-4">
              <label class="form-label"
                >Establecimiento Educativo al que pertenece la Muestra:</label
              >
              <input type="text" class="form-control" />
            </div>

            <div class="col-md-4">
              <label class="form-label">Hora Toma de Muestra:</label>
              <input type="time" class="form-control" />
            </div>
            <div class="col-md-4">
              <label class="form-label"
                >Cantidad de Toma de Muestra en Sitio:</label
              >
              <input type="number" class="form-control" />
            </div>
            <div class="col-md-4">
              <label class="form-label">Nombre del operador:</label>
              <input type="number" class="form-control" />
            </div>
          </div>

          <div class="mb-1">
            <label class="form-label">MARCA</label>
            <input type="text" class="form-control" />
          </div>

          <div class="mb-1">
            <label class="form-label">CONTENIDO NETO</label>
            <input type="text" class="form-control" />
          </div>

          <div class="mb-1">
            <label class="form-label">DIRECCION / LUGAR PROCEDENCIA</label>
            <input type="text" class="form-control" />
          </div>

          <div class="mb-1">
            <label class="form-label"
              >LOTE - FECHA EMPACADO - FECHA DE DESPACHO</label
            >
            <input type="text" class="form-control" />
          </div>

          <div class="mb-1">
            <label class="form-label">FECHA DE VENCIMIENTO</label>
            <input type="date" class="form-control" />
          </div>

          <h4 class="mt-4 mb-1">PROPIEDADES ORGANOLEPTICAS DEL PRODUCTO</h4>

          <div class="mb-1">
            <label class="form-label">COLOR:</label>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="color1" />
              <label class="form-check-label" for="color1"
                >Rosado blanquesino, tonalidad amarillenta</label
              >
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="color2" />
              <label class="form-check-label" for="color2"
                >tonalidades gris verdoso</label
              >
            </div>
            <label class="form-label mt-2">Observación:</label>
            <input type="text" class="form-control" />
          </div>

          <div class="mb-1">
            <label class="form-label">OLOR:</label>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="olor1" />
              <label class="form-check-label" for="olor1"
                >Caracteristico propio de la Especie</label
              >
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="olor2" />
              <label class="form-check-label" for="olor2"
                >fuerte, hedor agrio o similar al azufre</label
              >
            </div>
            <label class="form-label mt-2">Observación:</label>
            <input type="text" class="form-control" />
          </div>

          <div class="mb-1">
            <label class="form-label">TEXTURA:</label>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="textura1" />
              <label class="form-check-label" for="textura1"
                >Firme al tacto, piel adherida al musculo</label
              >
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="textura2" />
              <label class="form-check-label" for="textura2"
                >Textura pegajosa, viscosa o babosa</label
              >
            </div>
            <label class="form-label mt-2">Observación:</label>
            <input type="text" class="form-control" />
          </div>

          <h4 class="mt-4 mb-1">
            ALMACENAMIENTO - TEMPERATURAS DE CONSERVACIÓN DEL PRODUCTO
          </h4>

          <div class="row mb-1">
            <div class="col-md-3">
              <label class="form-label">Cuarto Frio:</label>
              <input type="text" class="form-control" />
            </div>
            <div class="col-md-3">
              <label class="form-label">Tanque:</label>
              <input type="text" class="form-control" />
            </div>
            <div class="col-md-3">
              <label class="form-label">Nevera:</label>
              <input type="text" class="form-control" />
            </div>
            <div class="col-md-3">
              <label class="form-label">Caba:</label>
              <input type="text" class="form-control" />
            </div>
          </div>

          <div class="row mb-1">
            <div class="col-md-4">
              <label class="form-label">T° Refrigeración:</label>
              <input type="text" class="form-control" />
            </div>
            <div class="col-md-4">
              <label class="form-label">T° Congelación:</label>
              <input type="text" class="form-control" />
            </div>
            <div class="col-md-4">
              <label class="form-label">Cantidad Producto Almacenado:</label>
              <input type="text" class="form-control" />
            </div>
          </div>

          <div class="mb-1">
            <label class="form-label">ROTULADO Y/O ETIQUETADO</label>
            <textarea class="form-control" rows="3"></textarea>
          </div>

          <div class="mb-1">
            <label class="form-label">OBSERVACIONES</label>
            <textarea class="form-control" rows="3"></textarea>
          </div>

          <div class="mb-1">
            <label class="form-label">Cantidad según Kardex:</label>
            <input type="text" class="form-control" />
          </div>

          <div class="mb-1">
            <label class="form-label">Nombre del Operador:</label>
            <input type="text" class="form-control" />
          </div>

          <div class="mb-1">
            <label class="form-label">OBSERVACIONES GENERALES</label>
            <textarea class="form-control" rows="3"></textarea>
          </div>

          <h4 class="mt-4 mb-1">Visita Atendida por:</h4>
          <div class="row mb-1">
            <div class="col-md-6">
              <label class="form-label">Cargo:</label>
              <input type="text" class="form-control" />
            </div>
            <div class="col-md-6">
              <label class="form-label">N° de Identificación:</label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="row mb-1">
            <div class="col-md-6">
              <label class="form-label">Telefono:</label>
              <input type="tel" class="form-control" />
            </div>
            <div class="col-md-6">
              <label class="form-label">Firma:</label>
              <input type="text" class="form-control" />
            </div>
          </div>

          <h4 class="mt-4 mb-1">Visita Realizada por:</h4>
          <div class="row mb-1">
            <div class="col-md-6">
              <label class="form-label">Cargo:</label>
              <input type="text" class="form-control" />
            </div>
            <div class="col-md-6">
              <label class="form-label">N° de Identificación:</label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="row mb-1">
            <div class="col-md-6">
              <label class="form-label">Telefono:</label>
              <input type="tel" class="form-control" />
            </div>
            <div class="col-md-6">
              <label class="form-label">Firma:</label>
              <input type="text" class="form-control" />
            </div>
          </div>

          <div class="col-12 mt-2">
            <button type="submit" class="btn btn-primary">Guardar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import ToastNotification from "@/components/ToastNotification.vue";

export default {
  components: {
    LoadingSpinner,
    ToastNotification,
  },
  data() {
    return {
      isLoading: false,
      toastMessage: "",
      toastType: "",
      nuevoNombre: "", // Input para el nombre
      nuevoGrado: "", // Input para el grado
      filas: [], //filas de la tabla
      form: {
        fechaVisita: "",
        municipio: "",
        institucion: "",
        sede: "",
        operador: "",
        contrato: "",
        numVisita: "",
        modalidad: "",
        numBeneficiarios: "",
        horaInicio: "",
        horaFin: "",
      },
      formulariosOffline: [], // Para almacenar temporalmente los formularios en localStorage
    };
  },
  methods: {
    agregarFila() {
      if (this.nuevoNombre && this.nuevoGrado) {
        // Agregar una nueva fila con los valores ingresados
        this.filas.push({
          nombre: this.nuevoNombre,
          grado: this.nuevoGrado,
        });

        // Limpiar los campos después de agregar
        this.nuevoNombre = "";
        this.nuevoGrado = "";
      } else {
        this.showToast(
          "Por favor, complete ambos campos antes de agregar.",
          "danger"
        );
      }
    },
    guardarFormulario() {
      // Verificar si hay conexión a Internet
      if (navigator.onLine) {
        // Enviar formulario al servidor
        this.enviarFormularioAlServidor();
      } else {
        // Guardar formulario en localStorage
        this.guardarOffline();
        alert("Sin conexión. El formulario se ha guardado localmente.");
      }
    },
    guardarOffline() {
      // Leer formularios previos de localStorage
      const guardados =
        JSON.parse(localStorage.getItem("formulariosOffline")) || [];
      guardados.push(this.form); // Añadir el formulario actual
      localStorage.setItem("formulariosOffline", JSON.stringify(guardados));
      this.resetFormulario();
    },
    async enviarFormularioAlServidor() {
      try {
        this.isLoading = true;
        const apiUrl = process.env.VUE_APP_API_BASE_URL;
        // Enviar datos con una solicitud POST
        const response = await axios.post(`${apiUrl}/visitas`, this.form);
        console.log(response); //quitar
        alert("Formulario enviado exitosamente.");
        this.resetFormulario();
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        this.showToast(
          "No se pudo enviar el formulario" + error.response.data.message,
          "danger"
        );
        console.error("Error al enviar el formulario:", error);
      } finally {
        this.isLoading = false;
      }
    },
    showToast(message, type) {
      this.toastMessage = message;
      this.toastType = type;
      setTimeout(() => {
        this.toastMessage = "";
      }, 5000);
    },
  },
};
</script>
