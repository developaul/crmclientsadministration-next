import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import Layout from '../components/Layout'

import { GET_BEST_CLIENTS } from '../apollo/types';

const BestClients = () => {
  const { data, loading, startPolling, stopPolling } = useQuery(GET_BEST_CLIENTS)

  useEffect(() => {
    startPolling(1000)
    return () => stopPolling()
  }, [startPolling, stopPolling])

  if (loading) return null

  const bestClientSanitized = data?.getBestClients?.map(({ client, total }) => ({ ...client, total }))

  return (
    <Layout>
      <h1 className="text-2xl text-gray-800 font-light" >Mejores vendedores</h1>

      <BarChart
        className="mt-10"
        width={600}
        height={500}
        data={bestClientSanitized}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="total" fill="#3182ce" />
      </BarChart>
    </Layout>
  )
}

export default BestClients
