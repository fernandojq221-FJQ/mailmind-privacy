import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/privacy')({
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <div style={{
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      maxWidth: '760px',
      margin: '0 auto',
      padding: '2rem 1.5rem',
      color: '#1a1a1a',
      lineHeight: '1.7'
    }}>
      <h1 style={{ fontSize: '28px', fontWeight: 500, marginBottom: '0.25rem' }}>
        Política de privacidad — Mail Mind IA
      </h1>
      
      <p style={{ color: '#888', fontSize: '13px', marginBottom: '2rem' }}>
        Última actualización: 23 de mayo de 2026 · <a href="https://mail-mind-ia.lovable.app" style={{ color: '#185FA5' }}>mail-mind-ia.lovable.app</a>
      </p>

      <div style={{ background: '#f5f5f3', borderRadius: '10px', padding: '1rem 1.25rem', marginBottom: '2rem', fontSize: '14px', color: '#555' }}>
        Este documento describe cómo Mail Mind IA recopila, usa y protege la información personal de sus usuarios en relación con el acceso a servicios de Google (Gmail, Google Drive y Google Calendar).
      </div>

      <h2 style={{ fontSize: '18px', fontWeight: 500, marginTop: '2rem' }}>1. Información que recopilamos</h2>
      <p>Mail Mind IA accede a los siguientes datos únicamente con el consentimiento explícito del usuario mediante autenticación OAuth 2.0 con Google:</p>
      <ul style={{ paddingLeft: '1.25rem' }}>
        <li>Contenido de correos electrónicos no leídos en Gmail (asunto y fragmento de texto)</li>
        <li>Metadatos de mensajes (ID del mensaje, remitente, fecha)</li>
        <li>Archivos adjuntos en formato PDF cuando el usuario tiene plan Enterprise</li>
        <li>Acceso de escritura a Google Calendar para crear recordatorios de pago</li>
        <li>Acceso a Google Drive para almacenar facturas detectadas (solo plan Enterprise)</li>
      </ul>

      <h2 style={{ fontSize: '18px', fontWeight: 500, marginTop: '2rem' }}>2. Cómo usamos la información</h2>
      <p>Los datos recopilados se usan exclusivamente para:</p>
      <ul style={{ paddingLeft: '1.25rem' }}>
        <li>Analizar correos electrónicos mediante inteligencia artificial (Google Gemini) para detectar facturas, recibos y pagos pendientes</li>
        <li>Crear recordatorios automáticos en Google Calendar con las fechas de vencimiento detectadas</li>
        <li>Archivar documentos de facturación en Google Drive (solo usuarios Enterprise)</li>
        <li>Registrar métricas de uso (número de correos processed, facturas detectadas) en nuestra base de datos</li>
      </ul>
      <p>Mail Mind IA <strong>no vende, comparte ni transfiere</strong> ningún dato personal a terceros con fines comerciales.</p>

      <h2 style={{ fontSize: '18px', fontWeight: 500, marginTop: '2rem' }}>3. Almacenamiento de datos</h2>
      <p>Los tokens de acceso OAuth (access token y refresh token) se almacenan de forma segura en nuestra base de datos (Supabase) alojada en la Unión Europea. El contenido de los correos electrónicos <strong>no se almacena</strong> — solo se procesa en memoria durante la ejecución del agente y se descarta inmediatamente.</p>

      <h2 style={{ fontSize: '18px', fontWeight: 500, marginTop: '2rem' }}>4. Retención de datos</h2>
      <p>Los tokens de acceso se conservan mientras el usuario mantenga una cuenta activa en Mail Mind IA. El usuario puede revocar el acceso en cualquier momento desde su cuenta de Google en <a href="https://myaccount.google.com/permissions" style={{ color: '#185FA5' }}>myaccount.google.com/permissions</a> o eliminando su cuenta en nuestra plataforma.</p>

      <h2 style={{ fontSize: '18px', fontWeight: 500, marginTop: '2rem' }}>5. Seguridad</h2>
      <p>Implementamos medidas técnicas de seguridad que incluyen:</p>
      <ul style={{ paddingLeft: '1.25rem' }}>
        <li>Transmisión cifrada mediante HTTPS/TLS en todas las comunicaciones</li>
        <li>Tokens de acceso almacenados en base de datos con acceso restringido por políticas de Row Level Security (RLS)</li>
        <li>Acceso al sistema limitado al agente automatizado y al administrador de la plataforma</li>
      </ul>

      <h2 style={{ fontSize: '18px', fontWeight: 500, marginTop: '2rem' }}>6. Derechos del usuario</h2>
      <p>De acuerdo con el Reglamento General de Protección de Datos (RGPD), el usuario tiene derecho a:</p>
      <ul style={{ paddingLeft: '1.25rem' }}>
        <li>Acceder a los datos que almacenamos sobre él</li>
        <li>Solicitar la rectificación o eliminación de sus datos</li>
        <li>Revocar en cualquier momento el acceso a su cuenta de Google</li>
        <li>Portabilidad de sus datos</li>
      </ul>

      <h2 style={{ fontSize: '18px', fontWeight: 500, marginTop: '2rem' }}>7. Uso de APIs de Google</h2>
      <p>El uso que Mail Mind IA hace de la información recibida a través de las APIs de Google se ajusta a la <a href="https://developers.google.com/terms/api-services-user-data-policy" style={{ color: '#185FA5' }}>Política de datos de usuario de los servicios de API de Google</a>, incluidos los requisitos de uso limitado.</p>
      <p>En particular, el acceso a los datos de Gmail, Drive y Calendar se utiliza <strong>únicamente</strong> para proporcionar las funcionalidades descritas en esta política, y no para publicidad, perfilado de usuarios ni ningún otro fin secundario.</p>

      <h2 style={{ fontSize: '18px', fontWeight: 500, marginTop: '2rem' }}>8. Contacto</h2>
      <p>Para cualquier consulta relacionada con esta política de privacidad o con el tratamiento de tus datos, puedes contactarnos en:</p>
      
      <div style={{ background: '#f5f5f3', borderRadius: '8px', padding: '1rem 1.25rem', marginTop: '0.5rem', fontSize: '14px' }}>
        <strong>Mail Mind IA</strong><br />
        Sitio web: <a href="https://mail-mind-ia.lovable.app" style={{ color: '#185FA5' }}>mail-mind-ia.lovable.app</a><br />
        Email: fernandojq221@gmail.com
      </div>

      <footer style={{ fontSize: '13px', color: '#888', marginTop: '2rem' }}>
        Esta política puede actualizarse periódicamente. Los cambios significativos se notificarán a los usuarios registrados por correo electrónico.
      </footer>
    </div>
  );
}