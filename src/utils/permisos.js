/**
 * Utilidad de permisos de usuario.
 * Lee el objeto `userPermisos` almacenado en localStorage tras el login.
 */

export function getPermisos() {
  try {
    return JSON.parse(localStorage.getItem("userPermisos") || "{}");
  } catch {
    return {};
  }
}

/**
 * Retorna true si el objeto de permisos está vacío (usuario con sesión
 * antigua que no pasó por el nuevo login).
 */
export function permisosVacios() {
  const p = getPermisos();
  return Object.keys(p).length === 0;
}
