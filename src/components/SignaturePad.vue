<template>
  <div class="signature-container">
    <canvas
      ref="signatureCanvas"
      class="signature-pad"
      :width="canvasWidth"
      :height="150"
    ></canvas>
    <div class="signature-buttons">
      <button @click="clear" class="btn btn-secondary btn-sm">Limpiar</button>
    </div>
  </div>
</template>

<script>
import SignaturePad from "signature_pad";

export default {
  props: {
    // Si el contenedor debe ser 100% de ancho, eliminamos width y height aquí
  },
  data() {
    return {
      signaturePad: null,
      canvasWidth: 0, // Inicializamos el ancho
    };
  },
  mounted() {
    // Configuramos el canvas para que se ajuste al 100% del ancho del contenedor
    this.canvasWidth = this.$refs.signatureCanvas.parentElement.clientWidth;

    const canvas = this.$refs.signatureCanvas;
    this.signaturePad = new SignaturePad(canvas);
  },
  methods: {
    clear() {
      this.signaturePad.clear();
      this.$emit("signatureCleared"); // Emitimos evento de limpieza
    },
    saveSignature() {
      if (this.signaturePad.isEmpty()) {
        alert("Por favor, dibuje una firma primero.");
        return;
      }
      const dataUrl = this.signaturePad.toDataURL("image/png");
      this.$emit("signatureSaved", dataUrl);
    },
  },
};
</script>

<style scoped>
.signature-container {
  width: 100%; /* Tomará el 100% del contenedor */
  height: 150px; /* Fija la altura en 150px */
  position: relative;
}

.signature-pad {
  width: 100%; /* Toma el 100% del ancho del contenedor */
  height: 100%; /* Toma el 100% de la altura del contenedor (150px) */
  border: 1px solid #000;
  background-color: #fff;
}

.signature-buttons {
  margin-top: -40px;
  text-align: right;
}
</style>
