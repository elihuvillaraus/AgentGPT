# Cómo customizar el agente GPT para MarketINC

## PopUp / Ayuda

1. Cambiar nombre

- En el archivo `/src/public/locales/es/help.json` cambia los valores por:

```json
"WELCOME_TO_AGENT_GPT": "Bienvenido a S.T.R.A.T.E.G.A 🧠 ➕",
```

2. Cambiar descripción

- En el archivo `/src/public/locales/es/help.json` cambia los valores por:

```json
"INTRODUCING_AGENTGPT": "te permite lograr tus objetivos con ayuda del poder de la AI. Nombra a tu AI personalizado y hazlo embarcarse en cualquier meta imaginable. Intentará alcanzar la meta pensando en tareas a realizar, ejecutándolas y aprendiendo de los resultados 🚀",

"TO_LEARN_MORE_ABOUT_AGENTGPT": "Para conocer más sobre lo que la AI puede hacer por ti y tu empresa visita nuestro sitio web ",

"AGENTGPT_DOCUMENTATION": "MarketINC",
```

- En el archivo `/src/components/HelpDialog.tsx` cambia el valor de:

```tsx
<p>
  <strong>STRATEGAI</strong> {t("INTRODUCING_AGENTGPT", { ns: "help" })}
</p>
```

y del link:

```tsx
<a
    href="https://reworkd.github.io/AgentGPT-Documentation/docs/intro"
    className="text-sky-500"
>
```

por

```tsx
<a
    href="https://marketinc.mx"
    className="text-sky-500"
>
```

3. Cambiar iconos y rutas de RRSS

- En el archivo `/src/components/HelpDialog.tsx` importa los iconos de `react-icons`:

```tsx
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
```

- Cambia todo el < div> de redes sociales por:

```tsx
<div className="mt-4 flex w-full items-center justify-center gap-5">
  <div
    className="cursor-pointer rounded-full bg-black/30 p-3 hover:bg-sky-700/70"
    onClick={() =>
      window.open("https://www.linkedin.com/company/market_inc/", "_blank")
    }
  >
    <FaLinkedinIn size={30} />
  </div>
  <div
    className="cursor-pointer rounded-full bg-black/30 p-3 hover:bg-blue-700/70"
    onClick={() =>
      window.open("http://facebook.com/MarketINC.DigitalAgency", "_blank")
    }
  >
    <FaFacebookF size={30} />
  </div>
  <div
    className="cursor-pointer rounded-full bg-black/30 p-3 hover:bg-fuchsia-700/70"
    onClick={() =>
      window.open("https://www.instagram.com/marketinc/", "_blank")
    }
  >
    <FaInstagram size={30} />
  </div>
</div>
```

## Principal

1. Cambiar nombre

- S.T.R.A.T.E.G. AI
- - Ve a `/src/pages/index.tsx` y cambia el valor:

```tsx
<span className="text-4xl font-bold text-[#C0C0C0] xs:text-5xl sm:text-6xl">
                  S.T.R.A.T.E.G.
                </span>
                <span className="text-4xl font-bold text-white xs:text-5xl sm:text-6xl">
                  AI
</span>
```

2. Cambiar tagline

- Embárcate en cualquier meta imaginable con el poder de la AI.
- - Ve a `/public/locales/es/indexPage.json` y cambia el valor:

```json
"HEADING_DESCRIPTION": "Embárcate en cualquier meta imaginable con el poder de la AI"
```

3. Cambiar ejemplos en `/src/components/ChatWindow.tsx`

- Crea un plan de difusión para un nuevo producto
- Crea un plan de viaje a Hawaii
- Crea un reporte completo de la compañía Nike

```tsx
<ExampleAgentButton
    name="PlannerGPT 📈"
    setAgentRun={setAgentRun}
>
    Escribe un plan de difusión para un nuevo producto.
</ExampleAgentButton>
<ExampleAgentButton
    name="TravelGPT 🌴"
    setAgentRun={setAgentRun}
>
    Planea un viaje a Hawaii.
</ExampleAgentButton>
<ExampleAgentButton
    name="InvestigaGPT 📜"
    setAgentRun={setAgentRun}
>
    Crea un reporte completo de la compañía Nike
</ExampleAgentButton>
```

Cambia el estilo del componente `ExampleAgentButton`:

```tsx
const ExampleAgentButton = ({
  name,
  children,
  setAgentRun,
}: {
  name: string;
  children: string;
  setAgentRun?: (name: string, goal: string) => void;
}) => {
  const handleClick = () => {
    if (setAgentRun) {
      setAgentRun(name, children);
    }
  };

  return (
    <div
      className={clsx(
        `w-full p-2 sm:w-[33%]`,
        `bg-clip cursor-pointer rounded-lg bg-gradient-to-r from-indigo-600 to-sky-600 font-mono text-sm text-zinc-200 hover:bg-sky-700 sm:text-base`,
        `border-[2px] border-white/20 hover:border-[#1E88E5]/40`
      )}
      onClick={handleClick}
    >
      <p className="text-lg font-black">{name}</p>
      {children}
    </div>
  );
};
```

4. Cambiar pop up de web search

- Ve a `/public/locales/es/sorryDialog.json` y cambia los valores:

```json
{
  "SORRY_TITLE": "¡Alto ahí vaquer@! 🤠",
  "REASON_OF_DISABLE_WEB_SEARCH": "Esta función de búsqueda en la web 🌐 estará disponible en esta prueba pronto.",
  "PLEASE_MONITOR": "Mientras tanto, visita nuestro sitio web ",
  "ROADMAP": "nuestro sitio web",
  "PLEASE_MONITOR_END_TEXT": " para encontrar recursos y artículos relacionados."
}
```

- Falta cambiar el link. Ve a `../components/SorryDialog` y cambia el valor de `link` a https://www.marketinc.mx

5. Cambiar el mensaje de demo:

- º Ve a `/public/locales/es/indexPage.json` y cambia el valor:

```json
"DEMO_LOOPS_REACHED": "Lo siento, como esta es una aplicación de demostración, no podemos ejecutar nuestros agentes durante mucho tiempo. Nota: Si desea ejecuciones más largas, proporcione una clave de API personalizada en Configuración. Deteniendo...",
```

Por este:

```json
"DEMO_LOOPS_REACHED": "¡Ups!, como esta es una aplicación de demostración, no podemos ejecutar nuestros agentes durante mucho tiempo. Nota: Si deseas ejecuciones más largas y conocer más sobre lo que la AI puede hacer por ti y tu empresa visita nuestro sitio web marketinc.mx. Deteniendo...",
```

6. Cambiar el título de la ventana tipo Mac:

- Ve a index.tsx y cambia el valor de:

```tsx
<Expand className="flex w-full flex-row">
  <ChatWindow
    className="sm:mt-4"
    messages={messages}
    title={session?.user.subscriptionId ? proTitle : "AgentGPT"}
    onSave={
      shouldShowSave
        ? (format) => {
            setHasSaved(true);
            agentUtils.saveAgent({
              goal: goalInput.trim(),
              name: nameInput.trim(),
              tasks: messages,
            });
          }
        : undefined
    }
    scrollToBottom
    displaySettings
    openSorryDialog={() => setShowSorryDialog(true)}
    setAgentRun={setAgentRun}
  />
  {tasks.length > 0 && <TaskWindow />}
</Expand>
```

Por este:

```tsx
<Expand className="flex w-full flex-row">
  <ChatWindow
    className="sm:mt-4"
    messages={messages}
    title={session?.user.subscriptionId ? proTitle : "MarketINC AI"}
    onSave={
      shouldShowSave
        ? (format) => {
            setHasSaved(true);
            agentUtils.saveAgent({
              goal: goalInput.trim(),
              name: nameInput.trim(),
              tasks: messages,
            });
          }
        : undefined
    }
    scrollToBottom
    displaySettings
    openSorryDialog={() => setShowSorryDialog(true)}
    setAgentRun={setAgentRun}
  />
  {tasks.length > 0 && <TaskWindow />}
</Expand>
```

## Drawer

1. Cambiar logo

- Ir a `/src/components/Drawer.tsx`
- - 1. Importar Link de `next/link` e Image de `next/image`
- - 2. Agregar el siguiente código:

```tsx
<div className="mb-2 flex justify-center gap-2">
  <Link href="https://marketinc.mx" target="_blank">
    <Image
      src="/logoMarketincBlanco.png"
      width={120}
      height={40}
      alt="MarketINC Top Digital Marketing Agency"
    />
  </Link>
  <button
    className={clsx(
      showDrawer ? "-translate-x-2" : "translate-x-12 border-2 border-white/20",
      "absolute right-0 top-2 z-40 rounded-md bg-zinc-900 p-2 text-white transition-all hover:bg-zinc-700 "
    )}
    onClick={toggleDrawer}
  >
    <FaBars />
  </button>
</div>
```

- - 3. Coloca el logo y favicons en `/public/logoMarketincBlanco.png`

2. Poner descripción: "¿Te gustó S.T.R.A.T.E.G.A.?

Este asistente AI es solo una de las herramientas que en MarketINC ponemos a tu disposición. ¡Conviértete en nuestro cliente y descubre cómo podemos impulsar tus estrategias de negocio, marketing y ventas para alcanzar resultados excepcionales! Contáctanos hoy mismo."

- Ve a `/public/locales/es/drawer.json` y cambia los valores por:

```json
{
  "HELP_BUTTON": "Ayuda",
  "SETTINGS_BUTTON": "Configuraciones",
  "SUPPORT_BUTTON": "Soporte",
  "MY_AGENTS": "Mis agentes",
  "SIGN_IN_NOTICE": "Este asistente AI es solo una de las herramientas que en MarketINC ponemos a tu disposición. ¡Conviértete en nuestro cliente y descubre cómo podemos impulsar tus estrategias de negocio, marketing y ventas para alcanzar resultados excepcionales! Contáctanos hoy mismo.",
  "NEED_TO_SIGN_IN_AND_CREATE_AGENT_FIRST": "¡Primero debe crear y guardar su primer agente antes de que algo aparezca aquí!",
  "SIGN_IN": "¿Te gustó S.T.R.A.T.E.G.A.?",
  "SIGN_OUT": "Cerrar sesión",
  "ACCOUNT": "Cuenta",
  "USER_IMAGE": "Imagen de usuario"
}
```

- - Esto además agrega el "SUPPORT_BUTTON": "Soporte"

3. Poner link sobre "¿Te gustó S.T.R.A.T.E.G.A.?"

- Cambia el valor de link en `/src/components/Drawer.tsx` en la const handleSupport:

```tsx
const handleSupport = () => {
  const donationUrl = "https://www.marketinc.mx";
  window.open(donationUrl, "_blank");
};
```

- Ahora cambia el llamado de la función signIn() en el mismo archivo por handleSupport():

```tsx
<a
    className="link"
    onClick={() => {
    signIn();
    }}
>
```

a esto

```tsx
<a
    className="link"
    onClick={() => {
    handleSupport();
    }}
>
```

- - Agrega un <p> y una clase para bajar el tamaño del texto de descripción:

```jsx
<p className="mt-3 text-sm">
```

4. Poner los botones de "Conocer más" y "Contacto"

```jsx
<div className="flex justify-around text-sm">
  <Link href="https://marketinc.mx" target="_blank">
    <button
      type="button"
      className="my-10 rounded-lg bg-gradient-to-l from-violet-600 px-2 py-2.5  font-medium outline-violet-500 ring-violet-500/50 hover:outline-2 hover:ring-2 focus:outline-none focus:ring-2"
    >
      Conocer más
    </button>
  </Link>
  <Link href="https://marketinc.mx/contacto" target="_blank">
    <button
      type="button"
      className="my-10 rounded-lg bg-gradient-to-r from-sky-600 px-2 py-2.5  font-medium outline-sky-500 ring-sky-500/50 hover:outline-2 hover:ring-2 focus:outline-none focus:ring-2"
    >
      Contacto
    </button>
  </Link>
</div>
```

### Así queda todo el componente con condicional de personas no autenticadas:

```jsx
{
  status === "unauthenticated" && (
    <div>
      <a
        className="link"
        onClick={() => {
          signIn();
        }}
      >
        {`${t("SIGN_IN", { ns: "drawer" })}`}
      </a>{" "}
      <p className="mt-3 text-sm">
        {`${t("SIGN_IN_NOTICE", { ns: "drawer" })}`}
      </p>
      <div className="flex justify-around text-sm">
        <Link href="https://marketinc.mx" target="_blank">
          <button
            type="button"
            className="my-10 rounded-lg bg-gradient-to-l from-violet-600 px-2 py-2.5  font-medium outline-violet-500 ring-violet-500/50 hover:outline-2 hover:ring-2 focus:outline-none focus:ring-2"
          >
            Conocer más
          </button>
        </Link>
        <Link href="https://marketinc.mx/contacto" target="_blank">
          <button
            type="button"
            className="my-10 rounded-lg bg-gradient-to-r from-sky-600 px-2 py-2.5  font-medium outline-sky-500 ring-sky-500/50 hover:outline-2 hover:ring-2 focus:outline-none focus:ring-2"
          >
            Contacto
          </button>
        </Link>
      </div>
    </div>
  );
}
```

5. Ocultar botón de settings

- Comenta el botón de settings

6. Colocar icono de mail

- Agrega el icono de mail en `/src/components/Drawer.tsx` importando el icono:

```jsx
import { CiMail } from "react-icons/ci";
```

- Agrega los iconos de LI, FB e IG en los que ya están en el archivo:

```jsx
FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
```

7. Cambiar los links de RRSS

- Cambia todo el componente de RRSS por:

```jsx
<div className="flex flex-row items-center justify-center">
  <DrawerItem
    icon={
      <CiMail
        size={30}
        className="transition-colors group-hover:fill-current group-hover:text-gray-500"
      />
    }
    text="Mail"
    href="https:www.marketinc.mx/contacto"
    target="_blank"
    small
  />
  <DrawerItem
    icon={
      <FaLinkedinIn
        size={30}
        className="transition-colors group-hover:fill-current group-hover:text-sky-500"
      />
    }
    text="LinkedIN MarketINC Agency"
    href="https://www.linkedin.com/company/market_inc/"
    target="_blank"
    small
  />
  <DrawerItem
    icon={
      <FaFacebookF
        size={30}
        className="transition-colors group-hover:fill-current group-hover:text-blue-500"
      />
    }
    text="Facebook MarketINC Agency"
    href="http://facebook.com/MarketINC.DigitalAgency"
    target="_blank"
    small
  />
  <DrawerItem
    icon={
      <FaInstagram
        size={30}
        className="transition-colors group-hover:fill-current group-hover:text-purple-500"
      />
    }
    text="Instagram MarketINC Agency"
    href="https://www.instagram.com/marketinc/"
    target="_blank"
    small
  />
</div>
```

## Footer

1. Colocar footer

- Copia y pega el componente Footer.jsx en `/src/layout/`
- En `/src/pages/index.tsx` copia el siguiente código al final, después del cierre de la etiqueta </ main>:

```jsx
<div className="flex justify-center">
  <Footer />
</div>
```

- - Recuerda importar el componente Footer en `/src/pages/index.tsx`:

## SEO / Open Graph

1. Cambiar en `/src/layout/default.tsx` el valor del HEAD ....

```jsx
<Head>
  <title>AgentGPT</title>
  <meta name="description" content={description} />
  <meta name="twitter:site" content="@AgentGPT" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="AgentGPT 🤖" />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content="https://agentgpt.reworkd.ai/banner.png" />
  <meta name="twitter:image:width" content="1280" />
  <meta name="twitter:image:height" content="640" />
  <meta
    property="og:title"
    content="AgentGPT: Autonomous AI in your browser 🤖"
  />
  <meta property="og:description" content={description} />
  <meta property="og:url" content="https://agentgpt.reworkd.ai/" />
  <meta property="og:image" content="https://agentgpt.reworkd.ai/banner.png" />
  <meta property="og:image:width" content="1280" />
  <meta property="og:image:height" content="640" />
  <meta property="og:type" content="website" />
  <meta
    name="google-site-verification"
    content="sG4QDkC8g2oxKSopgJdIe2hQ_SaJDaEaBjwCXZNkNWA"
  />
  <link rel="icon" href="/favicon.ico" />
</Head>
```

Por este:

```jsx
<Head>
  <title>STRATEGAI - MarketINC</title>
  <meta name="description" content={description} />
  <meta name="twitter:site" content="@market_inc" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="STRATEGAI 🤖" />
  <meta name="twitter:description" content={description} />
  <meta
    name="twitter:image"
    content="https://marketinc-website.s3.amazonaws.com/portada_sitio_46f01758fe.png"
  />
  <meta name="twitter:image:width" content="1280" />
  <meta name="twitter:image:height" content="640" />
  <meta
    property="og:title"
    content="STRATEGAI: Embárcate en cualquier meta imaginable con el poder de la AI. 🤖"
  />
  <meta property="og:description" content={description} />
  <meta property="og:url" content="https://www.marketinc.mx" />
  <meta
    property="og:image"
    content="https://marketinc-website.s3.amazonaws.com/portada_sitio_46f01758fe.png"
  />
  <meta property="og:image:width" content="1280" />
  <meta property="og:image:height" content="640" />
  <meta property="og:type" content="website" />
  {/* <meta
    name="google-site-verification"
    content="sG4QDkC8g2oxKSopgJdIe2hQ_SaJDaEaBjwCXZNkNWA"
  /> */}
  <link rel="icon" href="/favicon.ico" />
</Head>
```
