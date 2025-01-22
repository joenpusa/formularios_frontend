<template>
  <div class="signature-container">
    <canvas
      ref="signatureCanvas"
      class="signature-pad"
      :width="canvasWidth"
      :height="150"
    ></canvas>
    <div class="signature-buttons">
      <button type="button" @click="clear" class="btn btn-secondary btn-sm">
        Limpiar
      </button>
      <button
        type="button"
        @click="saveSignature"
        class="btn btn-primary btn-sm"
      >
        Guardar
      </button>
    </div>
  </div>
</template>

<script>
import SignaturePad from "signature_pad";

export default {
  props: {
    idFirma: { type: String, required: true },
    varFirma: { type: String, default: "" },
  },
  data() {
    return {
      signaturePad: null,
      canvasWidth: 0,
    };
  },
  mounted() {
    this.canvasWidth = this.$refs.signatureCanvas.parentElement.clientWidth;

    const canvas = this.$refs.signatureCanvas;
    this.signaturePad = new SignaturePad(canvas);

    // Detecta cuando el usuario dibuja en el canvas
    this.signaturePad.onEnd = () => {
      const dataUrl = this.signaturePad.toDataURL("image/png");
      this.$emit("inputChanged", { idFirma: this.idFirma, firma: dataUrl });
    };

    if (this.varFirma) {
      const img = new Image();
      img.src = this.varFirma;
      img.onload = () => {
        const context = canvas.getContext("2d");
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
      };
    }
  },
  methods: {
    clear() {
      this.signaturePad.clear();
      this.$emit("firmas-updated", { idFirma: this.idFirma, firma: "" });
    },
    saveSignature() {
      if (this.signaturePad.isEmpty()) {
        return;
      }
      const dataUrl = this.signaturePad.toDataURL("image/png");
      this.$emit("firmas-updated", { idFirma: this.idFirma, firma: dataUrl });
    },
  },
};
</script>

<style scoped>
.signature-container {
  width: 100%;
  height: 150px;
  position: relative;
}

.signature-pad {
  width: 100%;
  height: 100%;
  border: 1px solid #000;
  background-color: #fff;
}

.signature-buttons {
  margin-top: -40px;
  text-align: right;
}
</style>
