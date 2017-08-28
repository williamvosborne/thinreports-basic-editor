//  Copyright (C) 2012 Matsukei Co.,Ltd.
//
//  This program is free software: you can redistribute it and/or modify
//  it under the terms of the GNU General Public License as published by
//  the Free Software Foundation, either version 3 of the License, or
//  (at your option) any later version.
//
//  This program is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//  GNU General Public License for more details.
//
//  You should have received a copy of the GNU General Public License
//  along with this program.  If not, see <http://www.gnu.org/licenses/>.

App.addLocale({
  id: 'pt-BR', name: 'Portugues Brasil', font_family: "'Lucida Grande', 'Helvetica Neue', 'Yu Gothic UI', Arial",
  default_settings: {
    // Available values: break-word, none
    text_word_wrap: 'break-word'
  },
  messages: {
    toolbar_group_file: 'Arquivo',
    toolbar_group_edit: 'Editar',
    toolbar_group_view: 'Visualizar',
    toolbar_group_font: 'Fonte',
    toolbar_group_position: 'Disposicao',

    property_group_basis: 'Basico',
    property_group_shape: 'Grafico',
    property_group_association: 'Associacao',
    property_group_font: 'Fonte',
    property_group_text: 'Texto',
    property_group_simple_format: 'Formato Simples',
    property_group_position: 'Alinhar',
    property_group_list: 'Lista',
    property_group_list_header: 'Cabecalho da Lista',
    property_group_list_detail: 'Detalhes da Lista',
    property_group_list_footer: 'Rodape da Lista',
    property_group_list_page_footer: 'Rodape de Pagina da Lista',
    property_group_image: 'Imagem',
    property_group_pageno: 'Sem Pagina',

    label_title_setting: 'Titulo',
    label_page_setting: 'Pagina',
    label_margin_setting: 'Margem',
    label_direction_landscape: 'Paisagem',
    label_direction_portrait: 'Retrato',
    label_text_edit: 'Texto Editavel',
    label_new_report: 'Novo Relatorio',
    label_report_setting: 'Formato do Relatorio',
    label_specify_zoom_rate: 'Zoom',
    label_solid_line: 'Solida',
    label_dotted_line: 'Pontilhada',
    label_dashed_line: 'Pontilhada Maior',
    label_left_align: 'Alinhar a Esquerda',
    label_center_align: 'Alinhar ao Centro',
    label_right_align: 'Alinhar a Direita',
    label_top_align: 'Alinhar ao Topo',
    label_middle_align: 'Alinhar no Meio',
    label_bottom_align: 'Alinhar na Base',
    label_word_wrap_none: 'Manter Todos',
    label_word_wrap_break_word: 'Quebra de Palavra',
    label_overflow_truncate: 'Truncar',
    label_overflow_fit: 'Reduzir Para Caber',
    label_overflow_expand: 'Expandir',
    label_datetime_format: 'Formato de Data e Hora',
    label_number_format: 'Formato de Numero',
    label_character_fill_format: 'Preenchimento Com Formato de Caractere',
    label_fill_left: 'Preecher a Esquerda',
    label_fill_right: 'Preecher a Direita',
    label_left_position: 'Esquerda',
    label_center_position: 'Centro',
    label_right_position: 'Direita',
    label_top_position: 'Topo',
    label_middle_position: 'Meio',
    label_bottom_position: 'Base',
    label_color_none: 'Nenhum',
    label_save_file: 'Salvar Arquivo',
    label_open_file: 'Abrir Arquivo',
    label_open_image: 'Abrir Imagem',
    label_confirmation: 'Confirmacao',
    label_condition_and: 'e',
    label_preference: 'Preferencias',

    label_format: 'Formato',
    label_format_basic: 'Basico',
    label_format_type: 'Tipo',
    label_format_value: 'Valor',
    label_shape_type: 'Forma',
    label_layout: 'Layout',
    label_shapes: 'Formas',

    field_page_title: 'Titulo da Pagina',
    field_paper_type: 'Tipo de Papel',
    field_paper_width: 'Largura',
    field_paper_height: 'Altura',
    field_paper_direction: 'Orientacao da Pagina',
    field_margin_top: 'Margem Superior',
    field_margin_bottom: 'Margem Inferior',
    field_margin_left: 'Margem Esquerda',
    field_margin_right: 'Margem Direita',
    field_left_position: 'Esquerda',
    field_top_position: 'Topo',
    field_width: 'Largura',
    field_height: 'Altura',
    field_display: 'Exibicao',
    field_text_content: 'Texto (Primeira linha)',
    field_fill_color: 'Cor de Preenchimento',
    field_stroke_color: 'Cor do Traco',
    field_stroke_width: 'largura do Tracado',
    field_stroke_type: 'Tipo do Traco',
    field_corner_radius: 'Raio do Canto',
    field_description: 'Descricao',
    field_reference_id: 'ID de Referencia',
    field_default_value: 'Padrao',
    field_font_color: 'Cor',
    field_font_size: 'Tamanho',
    field_font_family: 'Familia',
    field_text_align: 'Alinhamento Horizontal',
    field_text_vertical_align: 'Alinhamento Vertical',
    field_text_word_wrap: 'Quebra de Linha',
    field_text_line_height: 'Altura da Linha',
    field_text_kerning: 'Kerning',
    field_multiple_line: 'Multiplas Linhas',
    field_text_overflow: 'Transbordar',
    field_format_type: 'Formato de Tipo',
    field_datetime_format: 'Formato Date e Hora',
    field_delimiter: 'Delimitador',
    field_decimal_place: 'Casa Decimal',
    field_fill_length: 'Comprimento',
    field_fill_character: 'Caractere',
    field_fill_direction: 'Direcao',
    field_basic_format: 'Formato Basico',
    field_horizontal_position: 'Horizontal',
    field_vertical_position: 'Vertical',
    field_auto_page_break: 'Quebra de Pagina',
    field_list_header: 'Cabecalho',
    field_list_page_footer: 'Rodape de Pagina',
    field_list_footer: 'Rodape',
    field_position: 'Posicao',
    field_language: 'Localidade',
    field_default_unit: 'Unidade Padrao',
    field_pageno_format: 'Formato',
    field_counted_page_target: 'Contagem de Objeto',
    field_default_counted_page_target: 'Relatorio',

    button_new_report: 'Novo',
    button_save: 'Salvar',
    button_saveas: 'Salvar Como',
    button_export_document_as_html: 'Exportar Documento Como HTML',
    button_export_document_as_csv: 'Exportar Documento Como CSV',
    button_open: 'Abrir',
    button_undo: 'Desfazer',
    button_redo: 'Refazer',
    button_page_setting: 'Formato do Relatorio',
    button_zoom_in: '+10%',
    button_zoom_out: '-10%',
    button_grid: 'Grade',
    button_guide: 'Guia',
    button_add_horizontal_guide: 'Adicionar Guia Horizontal',
    button_add_vertical_guide: 'Adicionar Guia Vertical',
    button_remove_guide: 'Remover Guia',
    button_edit_text: 'Editar Texto',
    button_align: 'Alinhar',
    button_align_left: 'Alinhar a Esquerda',
    button_align_center: 'Alinhar ao Centro',
    button_align_right: 'Alinhar a Direita',
    button_align_top: 'Alinhar ao Topo',
    button_align_middle: 'Alinhar no Meio',
    button_align_bottom: 'Alinhar ao Fundo',
    button_fit_same_width: 'Mesma Largura',
    button_fit_same_height: 'Mesma altura',
    button_fit_same_size: 'Mesmo Tamanho',
    button_bring_forward: 'Avancar',
    button_bring_to_front: 'Trazer Para Frente',
    button_send_backward: 'Recuar',
    button_send_to_back: 'Enviar para Tras',
    button_help: 'Ajuda',
    button_preference: 'Preferencia',
    button_about: 'Sobre',
    button_go_to_forum: 'Grupo de Discussao',
    button_feedback: 'Comentarios',
    button_translation: 'Contribuir com a Traducao',
    button_selection_tool: 'Selecao',
    button_zoom_tool: 'Zoom',
    button_rectangle_tool: 'Retangulo',
    button_ellipse_tool: 'Elipse',
    button_line_tool: 'Linha',
    button_text_tool: 'Texto',
    button_image_tool: 'Imagem',
    button_text_block_tool: 'Bloco de Texto',
    button_image_block_tool: 'Bloco de Imagem',
    button_page_number_tool: 'Numero de Pagina',
    button_list_tool: 'Lista',

    error_id_is_already_used: '{$id} ja esta em uso.',
    error_invalid_value: 'Um Valor Invalido.',
    error_id_contains_invalid_characters: 'Os caracteres disponiveis sao apenas um caractere alfanumerico e um sublinhado.',
    error_id_is_required: 'ID is required.',
    error_id_not_found: '{$id} nao encontrada.',
    error_id_is_not_textblock: '{$id}nao e um forma de Bloco de Texto.',
    error_id_is_not_list: '{$id}  nao e uma forma de Lista.',
    error_can_not_specify_myself: 'O mesmo nao pode ser especificado.',
    error_id_already_has_reference: '{$id} ja foi referenciado.',
    error_can_not_set_the_reference: 'Nao e possivel definir a referencia, pois ja foi referenciado a partir de outros formatos.',
    error_can_not_save: 'Nao Pode Ser Salvo.',
    error_paper_size_is_empty: 'O tamanho do papel esta vazio.',
    error_can_not_edit_layout_file: 'Este arquivo de layout nao pode ser aberto porque ele e incompativel.\n\nVersoes Compativeis: {$required}\nVersao atual: {$version}',
    error_unknown: 'Ocorreu um erro inesperado.',
    error_invalid_layout_file: 'Este arquivo de layout nao pode ser aberto devido a um problema.',
    error_failed_to_load_image: 'Falha ao carregar a imagem.',
    error_no_valid_placeholder_included: 'Sem um espaco reservado valido incluido.',
    error_unexpected_error: 'Ocorreu um erro inesperado.',

    notice_no_shapes: 'Nao ha formas',
    warning_discard_changes: 'Se voce tiver arquivos que nao foram salvos, as alteracoes serao descartadas.\nPor favor, nao se esqueca de salvar.',
    warning_discard_changes_en: '',

    text_editor_force_close_confirmation: 'Existem arquivos não salvos. Tem certeza de que deseja fechar sem salvar as alterações?',
    text_layout_force_close_confirmation: 'Este layout foi alterado. \nSalvar antes de fechar?',
    text_layout_export_definition_confirmation: 'Antes de exportar as definicoes de Layout, e necessario salvar esse arquivo de layout.\nSalvar Esse Layout?',
    text_change_unit: 'Mudar a unidade para {$unit}',
    text_apply_locale_setting: 'Depois de recarregar o Editor, a configuracao sera aplicada.\nVoce deseja aplicar agora?',
    text_layout_force_edit_confirmation: 'Porque esse layout foi criado com uma versao mais recente, ha um risco de algumas configuracoes serem perdidas na edicao.\nTem certeza de que deseja editar mesmo assim?',
    text_placeholder_of_pageno_description: '[Available Placeholders] {page}:Numero de pagina, {total}:Contagem Total de Paginas',
    text_counted_page_target_description: '[Allowed Targets] Lista (O ID da lista de destino) ou Relatorio (vazio)',
    text_feedback_in_project_site: 'Local do Projeto',
    text_feedback_in_github: 'Questoes no GitHub',

    text_please_feedback: 'Por favor relate o seu problema no site a seguir. Alem disso, por favor descreva detalhadamente a situacao em que o problema ocorreu.',
    text_unsaved_layout_exists_confirmation: 'Existem layouts nao salvos do ultimo uso.\nVoce quer restaurar?',

    shape_rectangle: 'Retangulo',
    shape_ellipse: 'Elipse',
    shape_line: 'Linha',
    shape_text: 'Texto',
    shape_image: 'Imagem',

    font_gothic: 'Gothic',
    font_mincho: 'Mincho'
  }
});
