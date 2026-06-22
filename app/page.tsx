import { ArrowUpRight, BadgeCheck, Download, FileText, Globe, Wrench } from 'lucide-react'
import { Space_Grotesk } from 'next/font/google'
import { capabilityGroups, overviewCards, publicDocs } from '../content'

const displayFont = Space_Grotesk({ subsets: ['latin', 'latin-ext'] })

function DocLink({ fileName, label }: { fileName: string; label: string }) {
  return (
    <a
      href={`/api/public-docs/${encodeURIComponent(fileName)}`}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-200 hover:bg-white/10"
    >
      <Download className="h-3.5 w-3.5" />
      {label}
    </a>
  )
}

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden px-4 pb-20 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="glass-panel glow-ring animate-fadeIn rounded-[28px] px-5 py-5 sm:px-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-4xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-cyan-200">
                <BadgeCheck className="h-4 w-4" />
                Product Documentation
              </div>
              <h1 className={`text-4xl font-semibold leading-tight text-white sm:text-5xl ${displayFont.className}`}>
                TechCatalyst AI
                <span className="accent-text"> раздел о программном продукте</span>
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
                Раздел с информацией о программном продукте: описание функциональности, технической архитектуры,
                жизненного цикла, экспертного экземпляра, тарифной модели и правового статуса.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://app.techcatalyst.ru/"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-white/10"
              >
                Платформа
              </a>
            </div>
          </div>
        </header>

        <section className="grid gap-4 pt-10 md:grid-cols-2 xl:grid-cols-4">
          {overviewCards.map((card) => (
            <article key={card.title} className="glass-panel-soft animate-fadeIn rounded-3xl p-5">
              <div className="mb-4 inline-flex rounded-2xl bg-white/8 p-3 text-cyan-200">{card.icon}</div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">{card.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{card.text}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-6 pt-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass-panel animate-fadeIn rounded-[32px] p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-white/8 p-3 text-cyan-200">
                <Globe className="h-5 w-5" />
              </div>
              <div>
                <h2 className={`text-2xl font-semibold text-white ${displayFont.className}`}>О продукте</h2>
                <p className="mt-1 text-sm text-slate-400">
                  Самостоятельная российская платформа управления доступом, маршрутизацией, учетом и мониторингом AI-функциональности.
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-6">
              {capabilityGroups.map((group) => (
                <section key={group.title} className="glass-panel-soft rounded-3xl p-5">
                  <h3 className="text-base font-semibold text-white">{group.title}</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>

          <aside className="glass-panel animate-fadeIn rounded-[32px] p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-white/8 p-3 text-amber-300">
                <Wrench className="h-5 w-5" />
              </div>
              <div>
                <h2 className={`text-2xl font-semibold text-white ${displayFont.className}`}>Для проверки и закупки</h2>
                <p className="mt-1 text-sm text-slate-400">
                  Материалы для реестра российского ПО, экспертиз, демо-доступа и договорной работы с клиентами.
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="glass-panel-soft rounded-3xl p-5">
                <div className="text-sm font-semibold text-white">Кратко</div>
                <div className="mt-3 space-y-3 text-sm leading-6 text-slate-300">
                  <p>Основной класс ПО: `02.06`.</p>
                  <p>Дополнительный класс: `02.08`.</p>
                  <p>ОКПД2: `62.01.29.000` и `58.29.50.000`.</p>
                  <p>Модель предоставления: неисключительная лицензия, стоимость по тарифной политике и договору.</p>
                </div>
              </div>

              <div className="glass-panel-soft rounded-3xl p-5">
                <div className="text-sm font-semibold text-white">Размещение</div>
                <div className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                  <p>Платформа: `app.techcatalyst.ru`</p>
                  <p>Раздел документов: `docs.techcatalyst.ru`</p>
                  <p>Скачиваемые документы выдаются из папки `../docs` текущего репозитория.</p>
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section className="pt-10">
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-2xl bg-white/8 p-3 text-cyan-200">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <h2 className={`text-2xl font-semibold text-white ${displayFont.className}`}>Документы</h2>
              <p className="mt-1 text-sm text-slate-400">
                Публичный пакет с базовой информацией о продукте и скачиваемыми материалами.
              </p>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {publicDocs.map((doc) => (
              <article key={doc.slug} className="glass-panel-soft animate-fadeIn rounded-3xl p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base font-semibold text-white">{doc.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{doc.description}</p>
                  </div>
                  <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-slate-500" />
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {doc.txtFile ? <DocLink fileName={doc.txtFile} label="TXT" /> : null}
                  {doc.docxFile ? <DocLink fileName={doc.docxFile} label="DOCX" /> : null}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
