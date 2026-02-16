export interface FileNode {
  id: string;
  name: string;
  type: 'folder' | 'file';
  size?: string;
  dateModified?: string;
  dateCreated?: string;
  security?: string;
  items?: number;
  children?: FileNode[];
}

export const mockFileData: FileNode[] = [
  {
    id: '1', name: 'Legal Cases', type: 'folder', security: 'High', items: 2, size: '450MB', dateModified: '14/02/2026', dateCreated: '01/01/2024',
    children: [
      {
        id: '1-1', name: '2024', type: 'folder', security: 'High', items: 2, size: '280MB', dateModified: '14/02/2026', dateCreated: '01/01/2024',
        children: [
          {
            id: '1-1-1', name: 'Smith vs Jones', type: 'folder', security: 'High', items: 3, size: '120MB', dateModified: '13/02/2026', dateCreated: '15/01/2024',
            children: [
              {
                id: '1-1-1-1', name: 'Evidence', type: 'folder', security: 'High', items: 3, size: '50MB', dateModified: '12/02/2026', dateCreated: '20/01/2024',
                children: [
                  { id: '1-1-1-1-1', name: 'crime_scene_photo1.jpg', type: 'file', size: '4.2MB', dateModified: '12/02/2026', dateCreated: '20/01/2024', security: 'High' },
                  { id: '1-1-1-1-2', name: 'crime_scene_photo2.jpg', type: 'file', size: '3.8MB', dateModified: '12/02/2026', dateCreated: '20/01/2024', security: 'High' },
                  { id: '1-1-1-1-3', name: 'forensics_report.pdf', type: 'file', size: '8.1MB', dateModified: '11/02/2026', dateCreated: '22/01/2024', security: 'High' },
                ]
              },
              { id: '1-1-1-2', name: 'contract_final.pdf', type: 'file', size: '2.4MB', dateModified: '13/02/2026', dateCreated: '15/01/2024', security: 'High' },
              { id: '1-1-1-3', name: 'deposition_transcript.docx', type: 'file', size: '1.2MB', dateModified: '11/02/2026', dateCreated: '22/01/2024', security: 'High' },
            ]
          },
          {
            id: '1-1-2', name: 'Corporate Merger ABC', type: 'folder', security: 'Maximum', items: 2, size: '160MB', dateModified: '14/02/2026', dateCreated: '01/02/2024',
            children: [
              {
                id: '1-1-2-1', name: 'Due Diligence', type: 'folder', security: 'Maximum', items: 2, size: '80MB', dateModified: '14/02/2026', dateCreated: '01/02/2024',
                children: [
                  { id: '1-1-2-1-1', name: 'financial_review.xlsx', type: 'file', size: '8.5MB', dateModified: '14/02/2026', dateCreated: '01/02/2024', security: 'Maximum' },
                  { id: '1-1-2-1-2', name: 'legal_review.pdf', type: 'file', size: '5.2MB', dateModified: '13/02/2026', dateCreated: '03/02/2024', security: 'Maximum' },
                ]
              },
              { id: '1-1-2-2', name: 'merger_agreement.pdf', type: 'file', size: '3.1MB', dateModified: '13/02/2026', dateCreated: '05/02/2024', security: 'Maximum' },
            ]
          },
        ]
      },
      {
        id: '1-2', name: '2023', type: 'folder', security: 'Standard', items: 1, size: '170MB', dateModified: '01/01/2024', dateCreated: '01/01/2023',
        children: [
          {
            id: '1-2-1', name: 'Patent Dispute', type: 'folder', security: 'High', items: 2, size: '170MB', dateModified: '01/01/2024', dateCreated: '15/03/2023',
            children: [
              {
                id: '1-2-1-1', name: 'Prior Art Research', type: 'folder', security: 'High', items: 2, size: '90MB', dateModified: '01/01/2024', dateCreated: '20/03/2023',
                children: [
                  { id: '1-2-1-1-1', name: 'prior_art_database.pdf', type: 'file', size: '45MB', dateModified: '01/01/2024', dateCreated: '20/03/2023', security: 'High' },
                  { id: '1-2-1-1-2', name: 'comparison_chart.xlsx', type: 'file', size: '2.1MB', dateModified: '31/12/2023', dateCreated: '25/03/2023', security: 'High' },
                ]
              },
              { id: '1-2-1-2', name: 'patent_filing.pdf', type: 'file', size: '4.7MB', dateModified: '01/01/2024', dateCreated: '15/03/2023', security: 'High' },
            ]
          },
        ]
      },
    ]
  },
  {
    id: '2', name: 'Financial Records', type: 'folder', security: 'Maximum', items: 2, size: '890MB', dateModified: '14/02/2026', dateCreated: '01/01/2024',
    children: [
      {
        id: '2-1', name: '2025', type: 'folder', security: 'Maximum', items: 2, size: '450MB', dateModified: '14/02/2026', dateCreated: '01/01/2025',
        children: [
          {
            id: '2-1-1', name: 'Q1_2025', type: 'folder', security: 'Maximum', items: 3, size: '220MB', dateModified: '10/02/2026', dateCreated: '01/01/2025',
            children: [
              {
                id: '2-1-1-1', name: 'Invoices', type: 'folder', security: 'Maximum', items: 2, size: '100MB', dateModified: '10/02/2026', dateCreated: '15/01/2025',
                children: [
                  { id: '2-1-1-1-1', name: 'invoice_jan_2025.pdf', type: 'file', size: '1.2MB', dateModified: '10/02/2026', dateCreated: '31/01/2025', security: 'Maximum' },
                  { id: '2-1-1-1-2', name: 'invoice_feb_2025.pdf', type: 'file', size: '1.1MB', dateModified: '10/02/2026', dateCreated: '28/02/2025', security: 'Maximum' },
                ]
              },
              { id: '2-1-1-2', name: 'balance_sheet.xlsx', type: 'file', size: '1.8MB', dateModified: '10/02/2026', dateCreated: '01/01/2025', security: 'Maximum' },
              { id: '2-1-1-3', name: 'audit_report.pdf', type: 'file', size: '5.6MB', dateModified: '08/02/2026', dateCreated: '31/03/2025', security: 'Maximum' },
            ]
          },
          {
            id: '2-1-2', name: 'Q2_2025', type: 'folder', security: 'Maximum', items: 2, size: '230MB', dateModified: '14/02/2026', dateCreated: '01/04/2025',
            children: [
              { id: '2-1-2-1', name: 'balance_sheet_q2.xlsx', type: 'file', size: '1.9MB', dateModified: '14/02/2026', dateCreated: '01/04/2025', security: 'Maximum' },
              { id: '2-1-2-2', name: 'revenue_analysis.pptx', type: 'file', size: '6.2MB', dateModified: '12/02/2026', dateCreated: '30/06/2025', security: 'Maximum' },
            ]
          },
        ]
      },
      {
        id: '2-2', name: '2024', type: 'folder', security: 'Maximum', items: 2, size: '440MB', dateModified: '01/01/2025', dateCreated: '01/01/2024',
        children: [
          {
            id: '2-2-1', name: 'Annual Report', type: 'folder', security: 'Maximum', items: 2, size: '220MB', dateModified: '01/01/2025', dateCreated: '01/12/2024',
            children: [
              { id: '2-2-1-1', name: 'annual_report_2024.pdf', type: 'file', size: '12.4MB', dateModified: '01/01/2025', dateCreated: '31/12/2024', security: 'Maximum' },
              { id: '2-2-1-2', name: 'executive_summary.docx', type: 'file', size: '2.3MB', dateModified: '31/12/2024', dateCreated: '28/12/2024', security: 'Maximum' },
            ]
          },
          { id: '2-2-2', name: 'tax_returns_2024.pdf', type: 'file', size: '3.2MB', dateModified: '15/01/2025', dateCreated: '15/01/2025', security: 'Maximum' },
        ]
      },
    ]
  },
  {
    id: '3', name: 'Client Documents', type: 'folder', security: 'High', items: 2, size: '340MB', dateModified: '13/02/2026', dateCreated: '01/01/2024',
    children: [
      {
        id: '3-1', name: 'Confidential NDAs', type: 'folder', security: 'Maximum', items: 2, size: '120MB', dateModified: '13/02/2026', dateCreated: '01/01/2024',
        children: [
          {
            id: '3-1-1', name: '2025 NDAs', type: 'folder', security: 'Maximum', items: 3, size: '80MB', dateModified: '13/02/2026', dateCreated: '01/01/2025',
            children: [
              { id: '3-1-1-1', name: 'client_alpha_nda.pdf', type: 'file', size: '890KB', dateModified: '13/02/2026', dateCreated: '15/01/2025', security: 'Maximum' },
              { id: '3-1-1-2', name: 'client_beta_nda.pdf', type: 'file', size: '1.1MB', dateModified: '12/02/2026', dateCreated: '20/01/2025', security: 'Maximum' },
              { id: '3-1-1-3', name: 'client_gamma_nda.pdf', type: 'file', size: '980KB', dateModified: '10/02/2026', dateCreated: '01/02/2025', security: 'Maximum' },
            ]
          },
          { id: '3-1-2', name: 'nda_template_2025.docx', type: 'file', size: '450KB', dateModified: '01/01/2025', dateCreated: '01/01/2025', security: 'High' },
        ]
      },
      {
        id: '3-2', name: 'Contracts', type: 'folder', security: 'High', items: 2, size: '220MB', dateModified: '10/02/2026', dateCreated: '01/02/2024',
        children: [
          {
            id: '3-2-1', name: 'Active Contracts', type: 'folder', security: 'High', items: 2, size: '120MB', dateModified: '10/02/2026', dateCreated: '01/01/2025',
            children: [
              { id: '3-2-1-1', name: 'service_agreement_2025.pdf', type: 'file', size: '3.4MB', dateModified: '10/02/2026', dateCreated: '01/01/2025', security: 'High' },
              { id: '3-2-1-2', name: 'retainer_agreement.pdf', type: 'file', size: '2.1MB', dateModified: '08/02/2026', dateCreated: '15/01/2025', security: 'High' },
            ]
          },
          { id: '3-2-2', name: 'contract_archive_2024.zip', type: 'file', size: '45MB', dateModified: '01/01/2025', dateCreated: '31/12/2024', security: 'High' },
        ]
      },
    ]
  },
  {
    id: '4', name: 'Corporate Documents', type: 'folder', security: 'Maximum', items: 2, size: '234MB', dateModified: '15/02/2026', dateCreated: '01/06/2024',
    children: [
      {
        id: '4-1', name: 'Board Resolutions', type: 'folder', security: 'Maximum', items: 2, size: '120MB', dateModified: '15/02/2026', dateCreated: '01/06/2024',
        children: [
          {
            id: '4-1-1', name: '2025', type: 'folder', security: 'Maximum', items: 2, size: '60MB', dateModified: '15/02/2026', dateCreated: '01/01/2025',
            children: [
              { id: '4-1-1-1', name: 'resolution_Q1_2025.pdf', type: 'file', size: '1.2MB', dateModified: '15/02/2026', dateCreated: '01/03/2025', security: 'Maximum' },
              { id: '4-1-1-2', name: 'minutes_Q1_2025.docx', type: 'file', size: '890KB', dateModified: '14/02/2026', dateCreated: '01/03/2025', security: 'Maximum' },
            ]
          },
          { id: '4-1-2', name: 'resolution_Q4_2024.pdf', type: 'file', size: '1.1MB', dateModified: '10/02/2026', dateCreated: '01/12/2024', security: 'Maximum' },
        ]
      },
      {
        id: '4-2', name: 'Policies', type: 'folder', security: 'Standard', items: 2, size: '114MB', dateModified: '08/02/2026', dateCreated: '01/07/2024',
        children: [
          {
            id: '4-2-1', name: 'HR Policies', type: 'folder', security: 'Standard', items: 2, size: '60MB', dateModified: '08/02/2026', dateCreated: '01/07/2024',
            children: [
              { id: '4-2-1-1', name: 'company_policy_v3.docx', type: 'file', size: '890KB', dateModified: '08/02/2026', dateCreated: '15/06/2024', security: 'Standard' },
              { id: '4-2-1-2', name: 'code_of_conduct.pdf', type: 'file', size: '2.3MB', dateModified: '05/02/2026', dateCreated: '01/07/2024', security: 'Standard' },
            ]
          },
          { id: '4-2-2', name: 'it_security_policy.pdf', type: 'file', size: '1.8MB', dateModified: '01/02/2026', dateCreated: '01/08/2024', security: 'High' },
        ]
      },
    ]
  },
  {
    id: '5', name: 'HR & Personnel', type: 'folder', security: 'High', items: 2, size: '340MB', dateModified: '13/02/2026', dateCreated: '01/06/2024',
    children: [
      {
        id: '5-1', name: 'Employee Files', type: 'folder', security: 'High', items: 2, size: '200MB', dateModified: '13/02/2026', dateCreated: '01/06/2024',
        children: [
          {
            id: '5-1-1', name: 'Active Staff', type: 'folder', security: 'High', items: 3, size: '120MB', dateModified: '13/02/2026', dateCreated: '01/01/2025',
            children: [
              { id: '5-1-1-1', name: 'contracts_2025.zip', type: 'file', size: '34MB', dateModified: '13/02/2026', dateCreated: '01/01/2025', security: 'High' },
              { id: '5-1-1-2', name: 'performance_reviews_Q4.xlsx', type: 'file', size: '2.4MB', dateModified: '10/02/2026', dateCreated: '01/01/2025', security: 'High' },
              { id: '5-1-1-3', name: 'org_chart_2025.pdf', type: 'file', size: '1.8MB', dateModified: '01/02/2026', dateCreated: '01/01/2025', security: 'Standard' },
            ]
          },
          { id: '5-1-2', name: 'employee_handbook_v4.pdf', type: 'file', size: '3.2MB', dateModified: '01/01/2025', dateCreated: '01/06/2024', security: 'Standard' },
        ]
      },
      {
        id: '5-2', name: 'Recruitment', type: 'folder', security: 'Standard', items: 2, size: '140MB', dateModified: '05/02/2026', dateCreated: '01/09/2024',
        children: [
          {
            id: '5-2-1', name: 'Open Positions', type: 'folder', security: 'Standard', items: 2, size: '80MB', dateModified: '05/02/2026', dateCreated: '01/01/2025',
            children: [
              { id: '5-2-1-1', name: 'senior_engineer_jd.docx', type: 'file', size: '340KB', dateModified: '05/02/2026', dateCreated: '15/01/2025', security: 'Standard' },
              { id: '5-2-1-2', name: 'product_manager_jd.docx', type: 'file', size: '320KB', dateModified: '03/02/2026', dateCreated: '20/01/2025', security: 'Standard' },
            ]
          },
          { id: '5-2-2', name: 'onboarding_checklist.docx', type: 'file', size: '450KB', dateModified: '01/09/2024', dateCreated: '01/09/2024', security: 'Standard' },
        ]
      },
    ]
  },
  {
    id: '6', name: 'Compliance & Audit', type: 'folder', security: 'Maximum', items: 2, size: '670MB', dateModified: '15/02/2026', dateCreated: '01/03/2024',
    children: [
      {
        id: '6-1', name: '2025 Audits', type: 'folder', security: 'Maximum', items: 2, size: '400MB', dateModified: '15/02/2026', dateCreated: '01/01/2025',
        children: [
          {
            id: '6-1-1', name: 'Internal Audits', type: 'folder', security: 'Maximum', items: 2, size: '200MB', dateModified: '15/02/2026', dateCreated: '01/01/2025',
            children: [
              { id: '6-1-1-1', name: 'internal_audit_Q1.pdf', type: 'file', size: '5.7MB', dateModified: '15/02/2026', dateCreated: '31/03/2025', security: 'Maximum' },
              { id: '6-1-1-2', name: 'audit_findings.xlsx', type: 'file', size: '1.2MB', dateModified: '12/02/2026', dateCreated: '01/04/2025', security: 'Maximum' },
            ]
          },
          { id: '6-1-2', name: 'compliance_checklist_2025.xlsx', type: 'file', size: '220KB', dateModified: '10/02/2026', dateCreated: '01/01/2025', security: 'High' },
        ]
      },
      {
        id: '6-2', name: 'Regulatory Filings', type: 'folder', security: 'Maximum', items: 2, size: '270MB', dateModified: '10/02/2026', dateCreated: '01/03/2024',
        children: [
          {
            id: '6-2-1', name: 'SEC Filings', type: 'folder', security: 'Maximum', items: 2, size: '150MB', dateModified: '10/02/2026', dateCreated: '01/03/2024',
            children: [
              { id: '6-2-1-1', name: 'sec_filing_annual.pdf', type: 'file', size: '12.4MB', dateModified: '10/02/2026', dateCreated: '01/03/2025', security: 'Maximum' },
              { id: '6-2-1-2', name: 'sec_filing_quarterly.pdf', type: 'file', size: '8.9MB', dateModified: '08/02/2026', dateCreated: '01/06/2025', security: 'Maximum' },
            ]
          },
          { id: '6-2-2', name: 'incident_log_2025.xlsx', type: 'file', size: '145KB', dateModified: '14/02/2026', dateCreated: '01/01/2025', security: 'High' },
        ]
      },
    ]
  },
  {
    id: '7', name: 'IT & Security', type: 'folder', security: 'Maximum', items: 2, size: '780MB', dateModified: '15/02/2026', dateCreated: '01/06/2024',
    children: [
      {
        id: '7-1', name: 'Security Policies', type: 'folder', security: 'Maximum', items: 2, size: '400MB', dateModified: '15/02/2026', dateCreated: '01/06/2024',
        children: [
          {
            id: '7-1-1', name: 'Access Control', type: 'folder', security: 'Maximum', items: 2, size: '200MB', dateModified: '15/02/2026', dateCreated: '01/06/2024',
            children: [
              { id: '7-1-1-1', name: 'access_policy_v3.pdf', type: 'file', size: '2.3MB', dateModified: '15/02/2026', dateCreated: '01/06/2024', security: 'Maximum' },
              { id: '7-1-1-2', name: 'user_permissions_matrix.xlsx', type: 'file', size: '1.8MB', dateModified: '14/02/2026', dateCreated: '01/07/2024', security: 'Maximum' },
            ]
          },
          { id: '7-1-2', name: 'penetration_test_report.pdf', type: 'file', size: '8.9MB', dateModified: '10/02/2026', dateCreated: '01/12/2024', security: 'Maximum' },
        ]
      },
      {
        id: '7-2', name: 'Network Docs', type: 'folder', security: 'Maximum', items: 2, size: '380MB', dateModified: '12/02/2026', dateCreated: '01/07/2024',
        children: [
          {
            id: '7-2-1', name: 'Infrastructure', type: 'folder', security: 'Maximum', items: 2, size: '200MB', dateModified: '12/02/2026', dateCreated: '01/07/2024',
            children: [
              { id: '7-2-1-1', name: 'network_topology.pdf', type: 'file', size: '15MB', dateModified: '12/02/2026', dateCreated: '01/07/2024', security: 'Maximum' },
              { id: '7-2-1-2', name: 'server_inventory.xlsx', type: 'file', size: '2.4MB', dateModified: '10/02/2026', dateCreated: '01/08/2024', security: 'Maximum' },
            ]
          },
          { id: '7-2-2', name: 'access_control_log.xlsx', type: 'file', size: '1.2MB', dateModified: '14/02/2026', dateCreated: '01/06/2024', security: 'High' },
        ]
      },
    ]
  },
  {
    id: '8', name: 'Contracts & Agreements', type: 'folder', security: 'Maximum', items: 2, size: '450MB', dateModified: '14/02/2026', dateCreated: '01/01/2024',
    children: [
      {
        id: '8-1', name: 'Vendor Contracts', type: 'folder', security: 'Maximum', items: 2, size: '250MB', dateModified: '14/02/2026', dateCreated: '01/01/2024',
        children: [
          {
            id: '8-1-1', name: 'Cloud Services', type: 'folder', security: 'Maximum', items: 2, size: '120MB', dateModified: '14/02/2026', dateCreated: '01/01/2024',
            children: [
              { id: '8-1-1-1', name: 'aws_contract_2025.pdf', type: 'file', size: '2.1MB', dateModified: '14/02/2026', dateCreated: '01/01/2025', security: 'Maximum' },
              { id: '8-1-1-2', name: 'azure_sla_2025.pdf', type: 'file', size: '1.9MB', dateModified: '10/02/2026', dateCreated: '01/01/2025', security: 'Maximum' },
            ]
          },
          { id: '8-1-2', name: 'vendor_master_list.xlsx', type: 'file', size: '890KB', dateModified: '08/02/2026', dateCreated: '01/01/2024', security: 'High' },
        ]
      },
      {
        id: '8-2', name: 'Partnership Docs', type: 'folder', security: 'High', items: 2, size: '200MB', dateModified: '10/02/2026', dateCreated: '15/06/2024',
        children: [
          {
            id: '8-2-1', name: 'Strategic Partners', type: 'folder', security: 'High', items: 2, size: '100MB', dateModified: '10/02/2026', dateCreated: '15/06/2024',
            children: [
              { id: '8-2-1-1', name: 'partner_alpha_mou.pdf', type: 'file', size: '1.8MB', dateModified: '10/02/2026', dateCreated: '15/06/2024', security: 'Maximum' },
              { id: '8-2-1-2', name: 'partner_beta_agreement.pdf', type: 'file', size: '2.2MB', dateModified: '08/02/2026', dateCreated: '01/07/2024', security: 'High' },
            ]
          },
          { id: '8-2-2', name: 'contract_templates.docx', type: 'file', size: '890KB', dateModified: '05/02/2026', dateCreated: '01/01/2024', security: 'Standard' },
        ]
      },
    ]
  },
  {
    id: '9', name: 'Research & Reference', type: 'folder', security: 'Standard', items: 2, size: '1.2GB', dateModified: '12/02/2026', dateCreated: '01/03/2024',
    children: [
      {
        id: '9-1', name: 'Case Law', type: 'folder', security: 'Standard', items: 2, size: '900MB', dateModified: '12/02/2026', dateCreated: '01/03/2024',
        children: [
          {
            id: '9-1-1', name: 'Supreme Court', type: 'folder', security: 'Standard', items: 2, size: '450MB', dateModified: '12/02/2026', dateCreated: '01/03/2024',
            children: [
              { id: '9-1-1-1', name: 'supreme_court_2024.pdf', type: 'file', size: '234MB', dateModified: '12/02/2026', dateCreated: '01/01/2025', security: 'Standard' },
              { id: '9-1-1-2', name: 'landmark_cases.pdf', type: 'file', size: '89MB', dateModified: '10/02/2026', dateCreated: '01/03/2024', security: 'Standard' },
            ]
          },
          { id: '9-1-2', name: 'precedent_analysis.docx', type: 'file', size: '4.5MB', dateModified: '08/02/2026', dateCreated: '20/03/2024', security: 'Standard' },
        ]
      },
      {
        id: '9-2', name: 'Legal Templates', type: 'folder', security: 'Standard', items: 2, size: '320MB', dateModified: '05/02/2026', dateCreated: '15/03/2024',
        children: [
          {
            id: '9-2-1', name: 'Court Filings', type: 'folder', security: 'Standard', items: 2, size: '160MB', dateModified: '05/02/2026', dateCreated: '15/03/2024',
            children: [
              { id: '9-2-1-1', name: 'motion_template.docx', type: 'file', size: '340KB', dateModified: '05/02/2026', dateCreated: '15/03/2024', security: 'Standard' },
              { id: '9-2-1-2', name: 'brief_template.docx', type: 'file', size: '280KB', dateModified: '03/02/2026', dateCreated: '20/03/2024', security: 'Standard' },
            ]
          },
          { id: '9-2-2', name: 'regulatory_updates_2025.pdf', type: 'file', size: '2.8MB', dateModified: '11/02/2026', dateCreated: '01/01/2025', security: 'Standard' },
        ]
      },
    ]
  },
  {
    id: '10', name: 'Client Communications', type: 'folder', security: 'High', items: 2, size: '512MB', dateModified: '15/02/2026', dateCreated: '01/01/2025',
    children: [
      {
        id: '10-1', name: 'Email Archives', type: 'folder', security: 'High', items: 2, size: '350MB', dateModified: '15/02/2026', dateCreated: '01/01/2025',
        children: [
          {
            id: '10-1-1', name: '2025', type: 'folder', security: 'High', items: 3, size: '200MB', dateModified: '15/02/2026', dateCreated: '01/01/2025',
            children: [
              { id: '10-1-1-1', name: 'january_emails.zip', type: 'file', size: '78MB', dateModified: '01/02/2026', dateCreated: '31/01/2025', security: 'High' },
              { id: '10-1-1-2', name: 'february_emails.zip', type: 'file', size: '82MB', dateModified: '15/02/2026', dateCreated: '14/02/2026', security: 'High' },
              { id: '10-1-1-3', name: 'correspondence_log.pdf', type: 'file', size: '2.3MB', dateModified: '13/02/2026', dateCreated: '15/01/2025', security: 'High' },
            ]
          },
          { id: '10-1-2', name: 'email_archive_2024.zip', type: 'file', size: '156MB', dateModified: '01/01/2025', dateCreated: '31/12/2024', security: 'High' },
        ]
      },
      {
        id: '10-2', name: 'Meeting Notes', type: 'folder', security: 'Standard', items: 2, size: '162MB', dateModified: '14/02/2026', dateCreated: '01/02/2025',
        children: [
          {
            id: '10-2-1', name: 'Q1 2025', type: 'folder', security: 'Standard', items: 2, size: '80MB', dateModified: '14/02/2026', dateCreated: '01/01/2025',
            children: [
              { id: '10-2-1-1', name: 'jan_meeting_notes.docx', type: 'file', size: '340KB', dateModified: '31/01/2025', dateCreated: '31/01/2025', security: 'Standard' },
              { id: '10-2-1-2', name: 'feb_meeting_notes.docx', type: 'file', size: '380KB', dateModified: '14/02/2026', dateCreated: '14/02/2026', security: 'Standard' },
            ]
          },
          { id: '10-2-2', name: 'client_feedback_q1.xlsx', type: 'file', size: '1.1MB', dateModified: '10/02/2026', dateCreated: '01/02/2025', security: 'Standard' },
        ]
      },
    ]
  },
  {
    id: '11', name: 'Marketing & Branding', type: 'folder', security: 'Standard', items: 2, size: '1.5GB', dateModified: '11/02/2026', dateCreated: '01/06/2024',
    children: [
      {
        id: '11-1', name: 'Brand Assets', type: 'folder', security: 'Standard', items: 2, size: '950MB', dateModified: '11/02/2026', dateCreated: '01/06/2024',
        children: [
          {
            id: '11-1-1', name: 'Logos & Icons', type: 'folder', security: 'Standard', items: 2, size: '500MB', dateModified: '11/02/2026', dateCreated: '01/06/2024',
            children: [
              { id: '11-1-1-1', name: 'logo_primary.svg', type: 'file', size: '245KB', dateModified: '11/02/2026', dateCreated: '01/06/2024', security: 'Standard' },
              { id: '11-1-1-2', name: 'icon_pack_2025.zip', type: 'file', size: '45MB', dateModified: '08/02/2026', dateCreated: '01/01/2025', security: 'Standard' },
            ]
          },
          { id: '11-1-2', name: 'brand_guidelines.pdf', type: 'file', size: '45MB', dateModified: '01/06/2024', dateCreated: '01/06/2024', security: 'Standard' },
        ]
      },
      {
        id: '11-2', name: 'Campaigns', type: 'folder', security: 'Standard', items: 2, size: '560MB', dateModified: '10/02/2026', dateCreated: '01/09/2024',
        children: [
          {
            id: '11-2-1', name: 'Q1 2025 Campaign', type: 'folder', security: 'Standard', items: 2, size: '300MB', dateModified: '10/02/2026', dateCreated: '01/01/2025',
            children: [
              { id: '11-2-1-1', name: 'campaign_brief.pdf', type: 'file', size: '2.3MB', dateModified: '10/02/2026', dateCreated: '01/01/2025', security: 'Standard' },
              { id: '11-2-1-2', name: 'campaign_assets.zip', type: 'file', size: '234MB', dateModified: '08/02/2026', dateCreated: '15/01/2025', security: 'Standard' },
            ]
          },
          { id: '11-2-2', name: 'social_media_calendar_2025.xlsx', type: 'file', size: '340KB', dateModified: '05/02/2026', dateCreated: '01/01/2025', security: 'Standard' },
        ]
      },
    ]
  },
  {
    id: '12', name: 'Project Management', type: 'folder', security: 'High', items: 2, size: '560MB', dateModified: '15/02/2026', dateCreated: '01/01/2025',
    children: [
      {
        id: '12-1', name: 'Active Projects', type: 'folder', security: 'High', items: 2, size: '300MB', dateModified: '15/02/2026', dateCreated: '01/01/2025',
        children: [
          {
            id: '12-1-1', name: 'Vault Redesign', type: 'folder', security: 'High', items: 3, size: '150MB', dateModified: '15/02/2026', dateCreated: '01/01/2025',
            children: [
              { id: '12-1-1-1', name: 'project_roadmap.pdf', type: 'file', size: '3.4MB', dateModified: '15/02/2026', dateCreated: '01/01/2025', security: 'High' },
              { id: '12-1-1-2', name: 'sprint_1_report.docx', type: 'file', size: '1.2MB', dateModified: '14/02/2026', dateCreated: '15/01/2025', security: 'Standard' },
              { id: '12-1-1-3', name: 'risk_register.xlsx', type: 'file', size: '1.8MB', dateModified: '12/02/2026', dateCreated: '01/01/2025', security: 'High' },
            ]
          },
          { id: '12-1-2', name: 'stakeholder_report_feb.docx', type: 'file', size: '2.1MB', dateModified: '13/02/2026', dateCreated: '01/02/2025', security: 'Standard' },
        ]
      },
      {
        id: '12-2', name: 'Completed Projects', type: 'folder', security: 'Standard', items: 2, size: '260MB', dateModified: '01/01/2025', dateCreated: '01/06/2024',
        children: [
          {
            id: '12-2-1', name: 'Portal Migration 2024', type: 'folder', security: 'Standard', items: 2, size: '130MB', dateModified: '01/01/2025', dateCreated: '01/06/2024',
            children: [
              { id: '12-2-1-1', name: 'migration_report.pdf', type: 'file', size: '5.6MB', dateModified: '01/01/2025', dateCreated: '31/12/2024', security: 'Standard' },
              { id: '12-2-1-2', name: 'lessons_learned.docx', type: 'file', size: '1.4MB', dateModified: '31/12/2024', dateCreated: '28/12/2024', security: 'Standard' },
            ]
          },
          { id: '12-2-2', name: 'project_archive_2024.zip', type: 'file', size: '89MB', dateModified: '01/01/2025', dateCreated: '31/12/2024', security: 'Standard' },
        ]
      },
    ]
  },
];