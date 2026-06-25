import { ArrowUpRight, BadgeCheck, Download, FileText, Globe, Layers3, ShieldCheck, Wrench } from 'lucide-react'
import { capabilityGroups, overviewCards, publicDocs, registryRequiredDocs } from '../content'

function Wrap({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-[1140px] px-6 max-sm:px-[18px] ${className}`}>{children}</div>
}

function DocLink({ fileName, label }: { fileName: string; label: string }) {
  return (
    <a
      href={`/api/public-docs/${encodeURIComponent(fileName)}`}
      className="inline-flex items-center gap-2 rounded-full border border-line bg-soft px-3.5 py-2 text-[13px] font-semibold text-ink transition-colors hover:border-blue hover:text-blue"
    >
      <Download className="h-3.5 w-3.5" />
      {label}
    </a>
  )
}

export default function HomePage() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur-md">
        <Wrap className="flex min-h-[68px] items-center justify-between gap-6 py-3 max-sm:min-h-[58px]">
          <a href="#" className="flex items-center gap-2 text-lg font-bold tracking-[-0.01em] text-[#222]">
            <span className="text-blue">▲</span>
            <span>
              Techcatalyst <span className="text-blue">Docs</span>
            </span>
          </a>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://techcatalyst.ru"
              className="rounded-full border border-line bg-white px-4 py-2 text-[14px] font-semibold text-ink transition-colors hover:border-blue hover:text-blue"
            >
              techcatalyst.ru
            </a>
            <a
              href="https://app.techcatalyst.ru"
              className="rounded-full bg-blue px-4 py-2 text-[14px] font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-blue-bright hover:shadow-cta"
            >
              app.techcatalyst.ru
            </a>
          </div>
        </Wrap>
      </header>

      <main>
        <section
          className="overflow-hidden py-24 pb-[84px] max-md:py-12 max-md:pb-11"
          style={{
            background:
              'radial-gradient(900px 460px at 82% -12%, rgba(24,55,218,.07), transparent 60%), #fff',
          }}
        >
          <Wrap className="grid grid-cols-[1.02fr_0.98fr] items-start gap-8 max-lg:grid-cols-1">
            <div>
              <span className="mb-3.5 inline-flex items-center gap-2 rounded-full bg-soft px-4 py-2 text-[13px] font-semibold uppercase tracking-[.12em] text-blue">
                <BadgeCheck className="h-4 w-4" />
                Product documentation
              </span>
              <h1 className="mb-5 text-[clamp(34px,4.4vw,54px)] font-bold leading-[1.12] tracking-[-.02em] text-[#222]">
                Техкаталист ИИ: публичный пакет документов и материалов о программном обеспечении.
              </h1>
              <p className="max-w-[700px] text-[clamp(16px,1.6vw,19px)] text-muted">
                Раздел правообладателя с документацией на программное обеспечение «Техкаталист ИИ», включая
                описание функциональных характеристик, сведения для установки и сведения для эксплуатации.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#documents"
                  className="inline-flex items-center gap-2 rounded-full bg-blue px-7 py-[13px] text-[15.5px] font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-blue-bright hover:shadow-cta"
                >
                  Перейти к документам
                </a>
                <a
                  href="https://app.techcatalyst.ru"
                  className="inline-flex items-center gap-2 rounded-full border border-[#d6dcec] bg-white px-7 py-[13px] text-[15.5px] font-semibold text-ink transition-all duration-200 hover:border-blue hover:text-blue"
                >
                  Открыть платформу
                </a>
              </div>
            </div>

            <aside className="rounded-panel border border-line bg-white p-7 shadow-panel">
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-full bg-soft p-3 text-blue">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[22px] font-semibold tracking-[-.02em] text-[#222]">Ключевые сведения</div>
                  <div className="text-[14px] text-muted">Для реестра, экспертов, закупки и технической команды</div>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  'Основной класс ПО: 02.06',
                  'Дополнительный класс: 02.08',
                  'ОКПД2: 62.01.29.000 и 58.29.50.000',
                  'Модель предоставления: неисключительная лицензия',
                  'На странице размещена документация по п. 4 ж Правил, утв. ПП РФ № 1236',
                  'Раздел документов обслуживается из текущего репозитория',
                ].map((item) => (
                  <div key={item} className="rounded-card border border-line bg-soft px-4 py-3 text-[14px] text-ink">
                    {item}
                  </div>
                ))}
              </div>
            </aside>
          </Wrap>
        </section>

        <section className="pb-6">
          <Wrap className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {overviewCards.map((card) => (
              <article key={card.title} className="rounded-card border border-line bg-white p-6 shadow-card">
                <div className="mb-4 inline-flex rounded-full bg-soft p-3 text-blue">{card.icon}</div>
                <h2 className="text-[18px] font-semibold tracking-[-.02em] text-[#222]">{card.title}</h2>
                <p className="mt-3 text-[15px] leading-7 text-muted">{card.text}</p>
              </article>
            ))}
          </Wrap>
        </section>

        <section className="py-20">
          <Wrap className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="rounded-panel border border-line bg-white p-7 shadow-panel">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-soft p-3 text-blue">
                  <Layers3 className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-[28px] font-semibold tracking-[-.02em] text-[#222]">О продукте и архитектуре</h2>
                  <p className="mt-1 text-[15px] text-muted">
                    Сводка по функциональности, техническому стеку и составу программного обеспечения.
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-5">
                {capabilityGroups.map((group) => (
                  <section key={group.title} className="rounded-card border border-line bg-soft p-5">
                    <h3 className="text-[20px] font-semibold tracking-[-.02em] text-[#222]">{group.title}</h3>
                    <ul className="mt-4 space-y-3 text-[15px] leading-7 text-muted">
                      {group.items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-[11px] h-2 w-2 rounded-full bg-blue" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </div>

            <aside className="space-y-5">
              <section className="rounded-panel border border-line bg-white p-7 shadow-panel">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-soft p-3 text-blue">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-[24px] font-semibold tracking-[-.02em] text-[#222]">Правовой статус</h2>
                    <p className="mt-1 text-[14px] text-muted">Данные для документирования и правовой проверки</p>
                  </div>
                </div>
                <div className="mt-5 space-y-3 text-[15px] leading-7 text-muted">
                  <p>Исключительное право принадлежит ИП Борисову Ивану Анатольевичу.</p>
                  <p>ПО предоставляется по модели неисключительной лицензии.</p>
                  <p>Сайты и домены используются правообладателем для размещения и документирования продукта.</p>
                </div>
              </section>

              <section className="rounded-panel border border-line bg-white p-7 shadow-panel">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-soft p-3 text-blue">
                    <Wrench className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-[24px] font-semibold tracking-[-.02em] text-[#222]">Для экспертизы и закупки</h2>
                    <p className="mt-1 text-[14px] text-muted">Материалы, которые обычно запрашивают на проверке</p>
                  </div>
                </div>
                <div className="mt-5 space-y-3 text-[15px] leading-7 text-muted">
                  <p>Описание функциональности, архитектуры, эксплуатации и жизненного цикла.</p>
                  <p>Инструкция по установке программного обеспечения и работе с тестовыми учётными данными.</p>
                  <p>Тарифная политика, сведения о принадлежности сайтов и документы по правам на ПО.</p>
                </div>
              </section>
            </aside>
          </Wrap>
        </section>

        <section className="pb-20">
          <Wrap>
            <div className="rounded-panel border border-line bg-white p-7 shadow-panel">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-soft p-3 text-blue">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-[28px] font-semibold tracking-[-.02em] text-[#222]">
                    Документация программного обеспечения «Техкаталист ИИ»
                  </h2>
                  <p className="mt-1 text-[15px] text-muted">
                    Обязательная документация, размещенная на сайте правообладателя: описание функциональных
                    характеристик программного обеспечения, а также информация, необходимая для установки и
                    эксплуатации.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-3">
                {registryRequiredDocs.map((doc) => (
                  <article key={doc.slug} className="rounded-card border border-line bg-soft p-5">
                    <h3 className="text-[18px] font-semibold tracking-[-.02em] text-[#222]">{doc.title}</h3>
                    <p className="mt-3 text-[15px] leading-7 text-muted">{doc.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {doc.txtFile ? <DocLink fileName={doc.txtFile} label="TXT" /> : null}
                      {doc.docxFile ? <DocLink fileName={doc.docxFile} label="DOCX" /> : null}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </Wrap>
        </section>

        <section id="documents" className="bg-soft py-20">
          <Wrap>
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-full bg-white p-3 text-blue shadow-card">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-[30px] font-semibold tracking-[-.02em] text-[#222]">Публичные документы</h2>
                <p className="mt-1 text-[15px] text-muted">
                  Полный комплект публичных материалов о программном обеспечении, правовом статусе и документации
                  для экспертной проверки.
                </p>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {publicDocs.map((doc) => (
                <article key={doc.slug} className="rounded-card border border-line bg-white p-6 shadow-card">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-[20px] font-semibold tracking-[-.02em] text-[#222]">{doc.title}</h3>
                      <p className="mt-3 text-[15px] leading-7 text-muted">{doc.description}</p>
                    </div>
                    <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-dim" />
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {doc.txtFile ? <DocLink fileName={doc.txtFile} label="TXT" /> : null}
                    {doc.docxFile ? <DocLink fileName={doc.docxFile} label="DOCX" /> : null}
                  </div>
                </article>
              ))}
            </div>
          </Wrap>
        </section>
      </main>

      <footer className="border-t border-line bg-white py-[38px] text-[14.5px] text-dim">
        <Wrap className="flex flex-wrap items-center justify-between gap-[18px]">
          <span>© 2026 Techcatalyst Docs</span>
          <span>
            <a href="mailto:info@2rm.ru" className="text-blue hover:underline">
              info@2rm.ru
            </a>{' '}
            ·{' '}
            <a href="https://techcatalyst.ru" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">
              techcatalyst.ru
            </a>
          </span>
        </Wrap>
      </footer>
    </>
  )
}
