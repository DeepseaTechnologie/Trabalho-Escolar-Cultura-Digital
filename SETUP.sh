#!/bin/bash

#  ============================================
#  GUIA DE INSTALAÇÃO & EXECUÇÃO
#  Projeto: Mulheres Negras na Tecnologia
#  ============================================

echo "🌟 Mulheres Negras na Tecnologia - Setup Guide"
echo "=============================================="
echo ""

# Verificar se está no diretório correto
if [ ! -f "index-new.html" ]; then
    echo "❌ Erro: Execute este script do diretório raiz do projeto"
    exit 1
fi

echo "✅ Projeto encontrado!"
echo ""
echo "📁 Estrutura de Arquivos:"
ls -la | grep -E '\.(html|css|js|md)$'
echo ""

# Opção 1: Python
echo "🚀 Iniciando servidor local..."
echo ""
echo "Opção 1: Python (3.6+)"
echo "  python -m http.server 8000"
echo ""

# Opção 2: Node.js
echo "Opção 2: Node.js (com http-server)"
echo "  npm install -g http-server"
echo "  http-server"
echo ""

# Opção 3: PHP
echo "Opção 3: PHP (5.4+)"
echo "  php -S localhost:8000"
echo ""

# Informações sobre os arquivos
echo "📄 ARQUIVOS PRINCIPAIS:"
echo "  • index-new.html         - Homepage melhorada (RECOMENDADO)"
echo "  • katherine-johnson-new.html - Biografia de Katherine (exemplo)"
echo "  • dorothy-vaughan-new.html   - Biografia de Dorothy"
echo "  • mary-jackson-new.html      - Biografia de Mary"
echo "  • mae-jemison-new.html       - Biografia de Mae"
echo ""

echo "🎨 ARQUIVOS CSS:"
echo "  • design/global.css      - Estilos globais"
echo "  • design/components.css  - Componentes reutilizáveis"
echo "  • design/homepage.css    - Estilos da homepage"
echo "  • design/biografia.css   - Estilos de biografias"
echo "  • design/themes.css      - Temas por mulher"
echo ""

echo "⚙️  ARQUIVOS JAVASCRIPT:"
echo "  • animacoes/main-new.js  - Script principal (modularizado)"
echo "  • animacoes/modules/*.js - Módulos individuais"
echo ""

echo "📖 DOCUMENTAÇÃO:"
echo "  • README-NEW.md          - Documentação completa"
echo "  • CSS-CLASSES-REFERENCE.html - Referência de classes"
echo ""

echo "=============================================="
echo "✨ Como usar:"
echo ""
echo "1. Inicie um servidor HTTP local"
echo "2. Acesse http://localhost:8000/index-new.html"
echo "3. Explore as páginas e animações"
echo ""
echo "Para produção, renomeie arquivos -new para versão final"
echo "=============================================="
echo ""

# Dicas de desenvolvimento
echo "💡 DICAS DE DESENVOLVIMENTO:"
echo ""
echo "Adicionar nova mulher:"
echo "  1. Crie novo arquivo HTML baseado em katherine-johnson-new.html"
echo "  2. Customize o tema de cores (--cor-primaria, etc)"
echo "  3. Adicione um card em index-new.html seção #biografias"
echo "  4. Ligue cards com links cruzados"
echo ""

echo "Modificar cores globais:"
echo "  Edite :root em design/global.css"
echo ""

echo "Desativar animações:"
echo "  Remova <script> tag do HTML"
echo ""

echo "=============================================="
echo "🎉 Projeto pronto! Divirta-se desenvolvendo!\n"
