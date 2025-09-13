# CORS

## Cross-Origin Resource Sharing
1. Medida de seguridad para prevenir abuso.  
2. Previene utilizar recursos de otro origen a menos que este lo permita.

---

## Metodo OPTIONS + CORS
- El metodo OPTIONS tiene como proposito preguntar los permisos de CORS al origen del recurso previo a solicitar el recurso.  
- Un problema de CORS 99% de las veces es un problema de backend.  

Un navegador hace un metodo OPTIONS para saber los permisos.  
Un cliente REST NO.  
Clientes REST como Postman, ThunderClient, Insomnia, etc.  

---

## Caso típico
**Front end dev:**  
"Este endpoint me tira error."

**Back end dev:**  
"Pero lo pruebo en Postman y me funciona sin problema."

**Conclusión:**  
Revisa CORS
