'use client'

import React from 'react';
import BackendInterfaceLayout from '../../components/BackendInterfaceLayout';
import RetailerManagementPage from '../../components/RetailerManagementPage';

export default function RetailerManagement() {
  return (
    <BackendInterfaceLayout>
      <RetailerManagementPage />
    </BackendInterfaceLayout>
  );
}