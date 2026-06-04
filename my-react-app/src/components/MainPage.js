import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import './mainpage.css'; // Ensure this file exists in the same folder

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MainPage = () => {
  const { user, isAuthenticated } = useAuth0();
  const [inputs, setInputs] = useState({
    casting_temp: '',
    rolling_speed: '',
    cooling_rate: ''
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [history, setHistory] = useState([]);
  
  // Reference to the results section for scrolling
  const resultsRef = useRef(null);

  useEffect(() => {
    const savedHistory = localStorage.getItem('prediction_history');
    if (savedHistory) {
      try {
        const parsedHistory = JSON.parse(savedHistory);
        if (Array.isArray(parsedHistory)) {
          setHistory(parsedHistory);
        }
      } catch (e) {
        console.error("Failed to parse history:", e);
      }
    }
  }, []);

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };

  const handleQuickFill = () => {
    setInputs({
      casting_temp: '720',
      rolling_speed: '15',
      cooling_rate: '5'
    });
  };

  const handlePredict = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);

    // Validate inputs
    if (isNaN(parseFloat(inputs.casting_temp)) || isNaN(parseFloat(inputs.rolling_speed)) || isNaN(parseFloat(inputs.cooling_rate))) {
      setError('Please enter valid numeric values for all parameters.');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/predict', {
        casting_temp: parseFloat(inputs.casting_temp),
        rolling_speed: parseFloat(inputs.rolling_speed),
        cooling_rate: parseFloat(inputs.cooling_rate)
      });
      const newResult = {
        ...response.data,
        timestamp: new Date().toISOString(),
        inputs: { ...inputs }
      };
      setResult(newResult);
      
      const safeHistory = Array.isArray(history) ? history : [];
      const newHistory = [newResult, ...safeHistory].slice(0, 10);
      setHistory(newHistory);
      localStorage.setItem('prediction_history', JSON.stringify(newHistory));
      
      // Increment prediction count in localStorage if user is authenticated
      if (isAuthenticated && user && user.sub) {
        const currentCount = parseInt(localStorage.getItem(`predictions_count_${user.sub}`) || '0');
        localStorage.setItem(`predictions_count_${user.sub}`, (currentCount + 1).toString());
      }
    } catch (err) {
      console.error(err);
      const msg = err.response?.data?.error || 'Prediction failed. Please ensure the backend server is running and try again.';
      setError(msg);
    }
    setLoading(false);
  };
  const handleDownloadCSV = () => {
    if (!result) return;
    const headers = ['casting_temp', 'rolling_speed', 'cooling_rate', 'uts', 'elongation', 'conductivity'];
    const row = [
      inputs.casting_temp,
      inputs.rolling_speed,
      inputs.cooling_rate,
      result.uts,
      result.elongation,
      result.conductivity
    ];
    const csv = [headers.join(','), row.join(',')].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const ts = new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-');
    a.download = `prediction-${ts}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };
  
  // Effect to scroll to results when they appear
  useEffect(() => {
    if (result && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [result]);

  return (
    <div className="main-page">
      <div className="prediction-container">
        <div className="card">
          <div className="card-header">
            <h2>Predict Wire Rod Properties</h2>
            <p className="subtitle">Enter manufacturing parameters to predict final rod characteristics</p>
          </div>

          <form onSubmit={handlePredict} className="prediction-form">
            <div className="input-group">
              <label htmlFor="casting_temp">Casting Temperature (°C)</label>
              <div className="input-wrapper" data-tooltip="Recommended range: 650-750°C">
                <input
                  type="number"
                  id="casting_temp"
                  name="casting_temp"
                  value={inputs.casting_temp}
                  onChange={handleChange}
                  placeholder="e.g. 720"
                  required
                />
                <span className="unit-indicator">°C</span>
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="rolling_speed">Rolling Speed (m/min)</label>
              <div className="input-wrapper" data-tooltip="Recommended range: 10-20 m/min">
                <input
                  type="number"
                  id="rolling_speed"
                  name="rolling_speed"
                  value={inputs.rolling_speed}
                  onChange={handleChange}
                  placeholder="e.g. 15"
                  required
                />
                <span className="unit-indicator">m/min</span>
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="cooling_rate">Cooling Rate (°C/s)</label>
              <div className="input-wrapper" data-tooltip="Recommended range: 1-10 °C/s">
                <input
                  type="number"
                  id="cooling_rate"
                  name="cooling_rate"
                  value={inputs.cooling_rate}
                  onChange={handleChange}
                  placeholder="e.g. 5"
                  required
                />
                <span className="unit-indicator">°C/s</span>
              </div>
            </div>

            <div className="button-group">
              <button type="button" className="secondary-button" onClick={handleQuickFill}>
                Quick Fill Demo
              </button>
              <button type="submit" className="predict-button" disabled={loading}>
                {loading ? (
                  <>
                    <div className="spinner"></div>
                    <span>Processing...</span>
                  </>
                ) : (
                  'Generate Prediction'
                )}
              </button>
            </div>
          </form>

          {error && (
            <div className="error-message">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <p>{error}</p>
            </div>
          )}
        </div>

        {result && (
          <div className="results-card" ref={resultsRef}>
            <div className="results-header">
              <h3>Prediction Results</h3>
              <p className="results-subtitle">Based on your input parameters</p>
              <button className="predict-button download-button" onClick={handleDownloadCSV}>Download CSV</button>
            </div>

            <div className="results-horizontal">
              <div className="result-item">
                <div className="result-label">Ultimate Tensile Strength</div>
                <div className="result-value">
                  {result.uts} <span className="result-unit">MPa</span>
                </div>
              </div>

              <div className="result-item">
                <div className="result-label">Elongation</div>
                <div className="result-value">
                  {result.elongation} <span className="result-unit">%</span>
                </div>
              </div>

              <div className="result-item">
                <div className="result-label">Conductivity</div>
                <div className="result-value">
                  {result.conductivity} <span className="result-unit">IACS</span>
                </div>
              </div>
            </div>
            
            <div className="results-chart-container">
              <h4>Results Visualization</h4>
              <Line
                data={{
                  labels: ['Ultimate Tensile Strength (MPa)', 'Elongation (%)', 'Conductivity (IACS)'],
                  datasets: [
                    {
                      label: 'Predicted Values',
                      data: [result.uts, result.elongation, result.conductivity],
                      backgroundColor: 'rgba(10, 102, 194, 0.05)',
                      borderColor: 'rgba(10, 102, 194, 1)',
                      pointBackgroundColor: 'rgba(10, 102, 194, 1)',
                      pointBorderColor: '#ffffff',
                      pointRadius: 8,
                      pointHoverRadius: 10,
                      pointBorderWidth: 2,
                      tension: 0.4,
                      borderWidth: 3,
                      fill: true
                    }
                  ]
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'bottom',
                      labels: {
                        padding: 20,
                        color: 'var(--text-color)',
                        font: {
                          size: 14,
                          weight: '500'
                        },
                        usePointStyle: true,
                        pointStyle: 'circle'
                      }
                    },
                    title: {
                      display: false
                    },
                    tooltip: {
                      backgroundColor: 'var(--card-bg)',
                      titleColor: 'var(--text-color)',
                      bodyColor: 'var(--text-color)',
                      borderColor: 'var(--primary-color)',
                      borderWidth: 1,
                      padding: 12,
                      displayColors: true,
                      titleFont: {
                        size: 14,
                        weight: '600'
                      },
                      bodyFont: {
                        size: 13
                      },
                      callbacks: {
                        label: function(context) {
                          let label = context.dataset.label || '';
                          if (label) {
                            label += ': ';
                          }
                          if (context.parsed.y !== null) {
                            label += context.parsed.y.toFixed(2);
                          }
                          return label;
                        }
                      }
                    }
                  },
                  scales: {
                    x: {
                      grid: {
                        color: 'rgba(0, 0, 0, 0.05)',
                        drawBorder: false
                      },
                      ticks: {
                        color: 'var(--text-color)',
                        font: {
                          size: 12,
                          weight: '500'
                        },
                        padding: 10
                      }
                    },
                    y: {
                      grid: {
                        color: 'rgba(0, 0, 0, 0.05)',
                        drawBorder: false
                      },
                      ticks: {
                        color: 'var(--text-color)',
                        font: {
                          size: 12,
                          weight: '500'
                        },
                        padding: 10,
                        callback: function(value) {
                          return value.toFixed(2);
                        }
                      },
                      beginAtZero: true
                    }
                  }
                }}
              />
            </div>

            <div className="results-chart-container">
              <h4>Standard Comparison</h4>
              <Bar
                data={{
                  labels: ['UTS (MPa)', 'Elongation (%)', 'Conductivity (IACS)'],
                  datasets: [
                    {
                      label: 'Your Prediction',
                      data: [result.uts, result.elongation, result.conductivity],
                      backgroundColor: 'rgba(10, 102, 194, 0.7)',
                    },
                    {
                      label: 'Industry Standard',
                      data: [120, 12, 61.5], // Mock standard values
                      backgroundColor: 'rgba(100, 255, 218, 0.7)',
                    }
                  ]
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: { position: 'bottom' }
                  }
                }}
              />
            </div>
          </div>
        )}

        {history.length > 0 && (
          <div className="card history-section">
            <div className="card-header">
              <h2>Recent Activity & Stats</h2>
              <p className="subtitle">Overview of your recent prediction history</p>
            </div>
            
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-label">Avg UTS</div>
                <div className="stat-value">{(history.reduce((acc, curr) => acc + curr.uts, 0) / history.length).toFixed(2)}</div>
                <div className="stat-unit">MPa</div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Avg Elongation</div>
                <div className="stat-value">{(history.reduce((acc, curr) => acc + curr.elongation, 0) / history.length).toFixed(2)}</div>
                <div className="stat-unit">%</div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Avg Conductivity</div>
                <div className="stat-value">{(history.reduce((acc, curr) => acc + curr.conductivity, 0) / history.length).toFixed(2)}</div>
                <div className="stat-unit">IACS</div>
              </div>
            </div>

            <div className="history-table-container">
              <table className="history-table">
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Temp (°C)</th>
                    <th>Speed (m/min)</th>
                    <th>Cooling (°C/s)</th>
                    <th>UTS</th>
                    <th>Elongation</th>
                    <th>Cond.</th>
                  </tr>
                </thead>
                <tbody>
                  {history.map((item, index) => (
                    <tr key={index}>
                      <td>{new Date(item.timestamp).toLocaleTimeString()}</td>
                      <td>{item.inputs.casting_temp}</td>
                      <td>{item.inputs.rolling_speed}</td>
                      <td>{item.inputs.cooling_rate}</td>
                      <td>{item.uts.toFixed(2)}</td>
                      <td>{item.elongation.toFixed(2)}</td>
                      <td>{item.conductivity.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
