import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { LegalPageShell, LegalSection, CompanyInfoBlock } from "@/components/LegalPageShell";
import { Navbar } from "@/components/Navbar";
import { company, legalPrivacyUpdatedAt } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Política de Privacidad | N3Stack",
  description:
    "Política de Privacidad de N3Stack SpA. Información sobre el tratamiento de datos personales en servicios de automatización, IA e integraciones.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <LegalPageShell
          title="Política de Privacidad"
          description={`En ${company.legalName} respetamos tu privacidad y protegemos tus datos personales conforme a la legislación chilena vigente, en particular la Ley N° 19.628 sobre Protección de la Vida Privada.`}
          updatedAt={legalPrivacyUpdatedAt}
        >
          <CompanyInfoBlock />

          <LegalSection title="1. Responsable del tratamiento">
            <p>
              El responsable del tratamiento de los datos personales es{" "}
              <strong className="font-medium text-zinc-300">
                {company.legalName}
              </strong>{" "}
              (RUT {company.rut}), con domicilio en {company.address}, dedicada a{" "}
              {company.description}.
            </p>
            <p>
              Contacto para consultas de privacidad:{" "}
              <a
                href={`mailto:${company.email}`}
                className="text-blue-400 transition-colors hover:text-cyan-300"
              >
                {company.email}
              </a>{" "}
              · Sitio web:{" "}
              <a
                href={company.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 transition-colors hover:text-cyan-300"
              >
                {company.websiteUrl}
              </a>
              .
            </p>
          </LegalSection>

          <LegalSection title="2. Ámbito de aplicación">
            <p>
              Esta política aplica al tratamiento de datos personales recopilados
              a través de nuestro sitio web, formularios de contacto, WhatsApp,
              demostraciones interactivas, contratación de planes, soporte
              técnico y cualquier servicio digital prestado por {company.tradeName}.
            </p>
          </LegalSection>

          <LegalSection title="3. Datos que podemos recopilar">
            <p>Según la relación comercial o el uso del sitio, podemos tratar:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Datos de identificación: nombre, razón social, RUT y cargo.</li>
              <li>Datos de contacto: correo electrónico, teléfono y WhatsApp.</li>
              <li>
                Datos comerciales: empresa, sector, necesidades declaradas y
                historial de comunicaciones.
              </li>
              <li>
                Datos técnicos: dirección IP, navegador, dispositivo, cookies y
                registros de uso del sitio.
              </li>
              <li>
                Datos operativos vinculados a servicios contratados: flujos de
                automatización, integraciones, conversaciones procesadas por
                agentes de IA o CRM, según lo acordado en cada proyecto.
              </li>
            </ul>
          </LegalSection>

          <LegalSection title="4. Finalidades del tratamiento">
            <p>Utilizamos los datos personales para:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Responder consultas y gestionar solicitudes comerciales.</li>
              <li>Evaluar, contratar y prestar nuestros servicios.</li>
              <li>
                Implementar soluciones de automatización, IA, CRM, sitios web e
                integraciones.
              </li>
              <li>Brindar soporte, mantenimiento y optimización continua.</li>
              <li>Cumplir obligaciones legales, contractuales y de facturación.</li>
              <li>
                Mejorar la experiencia del sitio, medir desempeño y prevenir
                fraudes o usos indebidos.
              </li>
              <li>
                Enviar comunicaciones informativas o comerciales, cuando exista
                base legal o consentimiento previo.
              </li>
            </ul>
          </LegalSection>

          <LegalSection title="5. Base legal">
            <p>
              El tratamiento se fundamenta, según corresponda, en el
              consentimiento del titular, la ejecución de un contrato o medidas
              precontractuales, el cumplimiento de obligaciones legales y el
              interés legítimo de {company.tradeName} para operar, proteger y
              mejorar sus servicios.
            </p>
          </LegalSection>

          <LegalSection title="6. Cookies y tecnologías similares">
            <p>
              Nuestro sitio puede utilizar cookies y herramientas de analítica
              para garantizar su funcionamiento, recordar preferencias y
              comprender el uso del servicio. Puedes configurar tu navegador
              para rechazar cookies, aunque algunas funciones podrían verse
              limitadas.
            </p>
          </LegalSection>

          <LegalSection title="7. Comunicación a terceros">
            <p>
              Podemos compartir datos con proveedores que nos apoyan en hosting,
              mensajería, analítica, pagos, inteligencia artificial, CRM e
              integraciones, siempre bajo obligaciones de confidencialidad y
              tratamiento acorde a esta política. No vendemos datos personales.
            </p>
            <p>
              También podremos comunicar datos cuando la ley lo exija o para
              proteger derechos, seguridad e integridad de {company.tradeName},
              sus clientes o terceros.
            </p>
          </LegalSection>

          <LegalSection title="8. Transferencias internacionales">
            <p>
              Al utilizar servicios en la nube o plataformas tecnológicas, los
              datos pueden ser procesados fuera de Chile. En esos casos,
              adoptamos medidas razonables para asegurar un nivel adecuado de
              protección conforme a la normativa aplicable.
            </p>
          </LegalSection>

          <LegalSection title="9. Conservación">
            <p>
              Conservamos los datos personales solo durante el tiempo necesario
              para cumplir las finalidades descritas, mantener la relación
              contractual, atender obligaciones legales o resolver
              controversias.
            </p>
          </LegalSection>

          <LegalSection title="10. Seguridad">
            <p>
              Implementamos medidas técnicas y organizativas razonables para
              proteger la confidencialidad, integridad y disponibilidad de la
              información. Ningún sistema es absolutamente infalible, por lo que
              recomendamos también resguardar tus credenciales y accesos.
            </p>
          </LegalSection>

          <LegalSection title="11. Derechos del titular">
            <p>
              De acuerdo con la legislación chilena, puedes solicitar acceso,
              rectificación, cancelación u oposición al tratamiento de tus datos
              personales, cuando corresponda.
            </p>
            <p>
              Para ejercer tus derechos, escríbenos a{" "}
              <a
                href={`mailto:${company.email}`}
                className="text-blue-400 transition-colors hover:text-cyan-300"
              >
                {company.email}
              </a>
              , indicando tu identidad y el derecho que deseas ejercer.
            </p>
          </LegalSection>

          <LegalSection title="12. Menores de edad">
            <p>
              Nuestros servicios están dirigidos a empresas y personas
              mayores de edad. No recopilamos intencionalmente datos de menores.
              Si detectamos ese tipo de información, la eliminaremos de forma
              razonable.
            </p>
          </LegalSection>

          <LegalSection title="13. Cambios a esta política">
            <p>
              Podemos actualizar esta Política de Privacidad para reflejar
              cambios legales, técnicos o comerciales. Publicaremos la versión
              vigente en esta página e indicaremos la fecha de actualización.
            </p>
          </LegalSection>
        </LegalPageShell>
      </main>
      <Footer />
    </>
  );
}
