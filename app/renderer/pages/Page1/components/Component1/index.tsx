import React, { useEffect, useState } from 'react';
import { IExampleItem } from '../../../../api/common';
import ExampleService from '../../../../api/example';

const Plan: React.FC = () => {
  const [examples, setExamples] = useState<IExampleItem>([]);
  const [search, setSearch] = useState('');
  const [add, setAdd] = useState('');
  const [remove, setRemove] = useState('');
  const init = async (query?: number) => {
    const data = await ExampleService.getExampleList(
      query ? { id: query } : {}
    );
    setExamples(data);
  };
  const addExample = async () => {
    try {
      await ExampleService.addExample({ name: add });
      init();
    } catch (error) {
      console.log(error);
    }
  };
  const searchExample = async () => {
    init(+search);
  };
  const removeExample = async () => {
    try {
      if (Number.isNaN(Number(search))) {
        return;
      }
      await ExampleService.removeExample({ id: +remove });
      init();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <>
      <h1>Plan</h1>
      <div>
        <button onClick={addExample}>添加example</button>
        <input value={add} onChange={(e) => setAdd(e.target.value)} />
      </div>

      <div>
        <button onClick={searchExample}>查询example</button>
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      <div>
        <button onClick={removeExample}>删除example</button>
        <input value={remove} onChange={(e) => setRemove(e.target.value)} />
      </div>

      <>
        {examples.map((v) => {
          return (
            <div key={v.id} style={{ margin: 5, fontSize: 20 }}>
              {v.id}:{v.name}
            </div>
          );
        })}
      </>
    </>
  );
};

export default Plan;
