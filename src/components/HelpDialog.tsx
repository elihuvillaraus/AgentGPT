import React from "react";
import { useTranslation } from "next-i18next";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Dialog from "./Dialog";

export default function HelpDialog({
  show,
  close,
}: {
  show: boolean;
  close: () => void;
}) {
  const [t] = useTranslation();
  return (
    <Dialog
      header={`${t("WELCOME_TO_AGENT_GPT", { ns: "help" })} 🤖`}
      isShown={show}
      close={close}
    >
      <div>
        <p>
          <strong>STRATEGAI</strong> {t("INTRODUCING_AGENTGPT", { ns: "help" })}
        </p>
        <br />
        <div>
          {t("TO_LEARN_MORE_ABOUT_AGENTGPT", {
            ns: "help",
          })}
          <a href="https://marketinc.mx" className="text-sky-500">
            {t("AGENTGPT_DOCUMENTATION", { ns: "help" })}
          </a>
        </div>
        <br />
        <p className="mt-2">{t("FOLLOW_THE_JOURNEY", { ns: "help" })}</p>
        <div className="mt-4 flex w-full items-center justify-center gap-5">
          <div
            className="cursor-pointer rounded-full bg-black/30 p-3 hover:bg-sky-700/70"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/company/market_inc/",
                "_blank"
              )
            }
          >
            <FaLinkedinIn size={30} />
          </div>
          <div
            className="cursor-pointer rounded-full bg-black/30 p-3 hover:bg-blue-700/70"
            onClick={() =>
              window.open(
                "http://facebook.com/MarketINC.DigitalAgency",
                "_blank"
              )
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
      </div>
    </Dialog>
  );
}
