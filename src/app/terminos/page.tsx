import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { LegalPageShell, LegalSection } from "@/components/LegalPageShell";
import { Navbar } from "@/components/Navbar";
import { company, legalUpdatedAt } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Términos y Condiciones | N3Stack",
  description:
    "Términos y Condiciones de uso de los servicios de N3Stack SpA: automatización, IA, CRM, sitios web e integraciones.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        <LegalPageShell
          title="Términos y Condiciones"
          description={`Estos Términos y Condiciones regulan el acceso al sitio web y la contratación de servicios ofrecidos por ${company.legalName}. Al utilizar nuestro sitio o contratar nuestros servicios, declaras haber leído y aceptado estas condiciones.`}
          updatedAt={legalUpdatedAt}
        >
          <LegalSection title="1. Identificación del prestador">
            <p>
              Los servicios son prestados por{" "}
              <strong className="font-medium text-zinc-300">
                {company.legalName}
              </strong>{" "}
              ({company.tradeName}), empresa chilena dedicada a{" "}
              {company.description}.
            </p>
            <p>
              Contacto:{" "}
              <a
                href={`mailto:${company.email}`}
                className="text-blue-400 transition-colors hover:text-cyan-300"
              >
                {company.email}
              </a>{" "}
              · Sitio web: {company.website}
            </p>
          </LegalSection>

          <LegalSection title="2. Aceptación">
            <p>
              El acceso y uso de este sitio implica la aceptación de estos
              Términos y Condiciones. Si no estás de acuerdo, debes abstenerse de
              utilizar el sitio o contratar servicios.
            </p>
            <p>
              La contratación de planes o proyectos puede requerir condiciones
              comerciales, propuestas o anexos específicos, que prevalecerán en
              lo relativo a alcance, plazos, precios y entregables.
            </p>
          </LegalSection>

          <LegalSection title="3. Servicios">
            <p>{company.tradeName} ofrece, entre otros, servicios de:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Automatización de procesos y flujos digitales.</li>
              <li>Implementación de agentes y asistentes de inteligencia artificial.</li>
              <li>CRM comercial, seguimiento de leads y ventas.</li>
              <li>Diseño, desarrollo y mantenimiento de sitios web.</li>
              <li>Integraciones entre plataformas, APIs y sistemas de terceros.</li>
              <li>Soporte, monitoreo y optimización continua.</li>
            </ul>
            <p>
              El detalle de cada servicio, alcance y limitaciones se definirá en
              la propuesta comercial, plan contratado o acuerdo específico con el
              cliente.
            </p>
          </LegalSection>

          <LegalSection title="4. Uso del sitio">
            <p>El usuario se compromete a utilizar el sitio de forma lícita y a no:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Interferir con su funcionamiento o seguridad.</li>
              <li>Intentar acceder sin autorización a sistemas o datos.</li>
              <li>Utilizar contenidos con fines ilícitos o no autorizados.</li>
              <li>Reproducir o explotar materiales del sitio sin permiso expreso.</li>
            </ul>
          </LegalSection>

          <LegalSection title="5. Planes, precios y pagos">
            <p>
              Los planes comerciales publicados en el sitio —incluyendo Presencia
              Digital, Empleado Digital y Fuerza Comercial— tienen carácter
              referencial y pueden estar sujetos a condiciones de activación,
              facturación mensual o anual, e impuestos aplicables.
            </p>
            <p>
              La contratación se perfecciona una vez confirmada por{" "}
              {company.tradeName}, mediante aceptación comercial, orden de
              servicio, propuesta firmada o medio equivalente acordado entre las
              partes.
            </p>
            <p>
              El impago, incumplimiento de plazos o falta de colaboración del
              cliente pueden suspender temporalmente la prestación del servicio.
            </p>
          </LegalSection>

          <LegalSection title="6. Obligaciones del cliente">
            <p>El cliente deberá, entre otras obligaciones:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Entregar información veraz, completa y actualizada.</li>
              <li>
                Facilitar accesos, credenciales y recursos necesarios para la
                implementación.
              </li>
              <li>
                Utilizar los servicios conforme a la ley y a las políticas de
                terceros integrados.
              </li>
              <li>
                Obtener consentimientos y bases legales necesarias para el
                tratamiento de datos de sus propios clientes o usuarios finales.
              </li>
            </ul>
          </LegalSection>

          <LegalSection title="7. Propiedad intelectual">
            <p>
              El sitio, marca, diseño, software, metodologías, documentación y
              contenidos desarrollados por {company.tradeName} están protegidos
              por la normativa de propiedad intelectual e industrial.
            </p>
            <p>
              Salvo pacto en contrario, la licencia de uso otorgada al cliente se
              limita a la finalidad contractual. Los desarrollos a medida,
              entregables y derechos asociados se regirán por el acuerdo
              específico entre las partes.
            </p>
          </LegalSection>

          <LegalSection title="8. Confidencialidad">
            <p>
              Ambas partes se comprometen a mantener confidencial la información
              no pública a la que accedan con ocasión de la relación comercial,
              salvo obligación legal o autorización expresa.
            </p>
          </LegalSection>

          <LegalSection title="9. Disponibilidad y limitación de responsabilidad">
            <p>
              {company.tradeName} procura mantener sus servicios disponibles y
              seguros, pero no garantiza operación ininterrumpida ni libre de
              errores, especialmente cuando dependen de terceros como hosting,
              WhatsApp, proveedores de IA, CRM u otras plataformas externas.
            </p>
            <p>
              En la medida permitida por la ley, {company.tradeName} no será
              responsable por daños indirectos, lucro cesante o pérdida de
              datos derivados de causas fuera de su control razonable, uso
              indebido del servicio o incumplimiento del cliente.
            </p>
          </LegalSection>

          <LegalSection title="10. Terminación">
            <p>
              Cualquiera de las partes podrá poner término a la relación
              contractual conforme a lo pactado en la propuesta o contrato
              correspondiente. La terminación no exime al cliente del pago de
              servicios efectivamente prestados ni de obligaciones pendientes.
            </p>
          </LegalSection>

          <LegalSection title="11. Modificaciones">
            <p>
              {company.tradeName} podrá modificar estos Términos y Condiciones
              cuando sea necesario. La versión vigente estará disponible en esta
              página. El uso continuado del sitio tras su publicación implicará
              aceptación de los cambios, salvo que la ley exija un consentimiento
              adicional.
            </p>
          </LegalSection>

          <LegalSection title="12. Ley aplicable y jurisdicción">
            <p>
              Estos Términos y Condiciones se rigen por las leyes de la{" "}
              {company.jurisdiction}. Cualquier controversia derivada de su
              interpretación o cumplimiento será sometida a los tribunales
              ordinarios de justicia competentes en Chile, salvo pacto en contrario
              entre las partes.
            </p>
          </LegalSection>

          <LegalSection title="13. Contacto">
            <p>
              Para consultas sobre estos términos, puedes escribirnos a{" "}
              <a
                href={`mailto:${company.email}`}
                className="text-blue-400 transition-colors hover:text-cyan-300"
              >
                {company.email}
              </a>
              .
            </p>
          </LegalSection>
        </LegalPageShell>
      </main>
      <Footer />
    </>
  );
}
