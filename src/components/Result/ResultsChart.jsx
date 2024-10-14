import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

// Registre todos os componentes necessários
Chart.register(...registerables);

const ResultsChart = () => {
    const data = {
        labels: ['Clientes Atendidos', 'Vendas Geradas (R$)', 'Downloads', 'Países Atendidos'],
        datasets: [
            {
                label: 'Resultados da LSG Digital',
                data: [35000, 680000, 10000, 40], // Dados reais
                backgroundColor: [
                    'rgba(255, 193, 7, 0.5)',
                    'rgba(40, 167, 69, 0.5)',
                    'rgba(0, 123, 255, 0.5)',
                    'rgba(220, 53, 69, 0.5)',
                ],
                borderColor: [
                    'rgba(255, 193, 7, 1)',
                    'rgba(40, 167, 69, 1)',
                    'rgba(0, 123, 255, 1)',
                    'rgba(220, 53, 69, 1)',
                ],
                borderWidth: 1,
                tension: 0.4, // Para dar uma leve curva nas barras
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: (value) => {
                        return value.toLocaleString(); // Formatação dos números
                    },
                },
            },
        },
        animations: {
            tension: {
                duration: 1000,
                from: 1,
                to: 0,
                loop: true,
            },
        },
    };

    return (
        <div className="max-w-xl mx-auto">
            <h2 className="text-center text-2xl font-bold text-white mb-4">Resultados da LSG Digital</h2>
            <Bar data={data} options={options} />
        </div>
    );
};

export default ResultsChart;
